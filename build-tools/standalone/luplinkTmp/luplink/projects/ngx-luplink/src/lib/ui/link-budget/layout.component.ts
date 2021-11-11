/* eslint-disable @typescript-eslint/quotes */
import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../../form/form.service';
import { Form } from '../../shared/models/Form.model';
import { Antennas } from '../../shared/models/Antennas';
import { LoggerService } from '../../shared/logger/logger.service';
import { ENVIRONMENT_TOKEN, FORM_TEMPLATE_TOKEN } from '../../shared/dependencies';

@Component({
  selector: 'lib-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public isStandalone: boolean = false;
  constructor(
    @Inject(ENVIRONMENT_TOKEN) private environment: any,
    @Inject(FORM_TEMPLATE_TOKEN) private FormsTemplate: any,
    public formService: FormService,
    private route: ActivatedRoute,
    public logger: LoggerService
  ) {
    this.isStandalone = this.environment.isStandalone; // Used to know if app is standalone
    // FIXME: Move elsewhere with models
    // This links each page to its components and its
    this.templates = {
      geometry: {
        name: 'Geometry',
        step: 'geometry',
        form: FormsTemplate.geometry,
      },
      ULCarrier: {
        name: 'Uplink Carrier',
        step: 'uplink',
        form: FormsTemplate.UL_carrier,
        atm: FormsTemplate.UL_atmosphere,
      },
      ULTransmitter: {
        name: 'Groundstation Transmitter',
        step: 'uplink',
        form: FormsTemplate.UL_transmitter_GS,
        antenna: FormsTemplate.UL_GS_tx_antenna,
      },
      ULReceiver: {
        name: 'Spacecraft Receiver',
        step: 'uplink',
        form: FormsTemplate.UL_receiver_SC,
        antenna: FormsTemplate.UL_SC_rx_antenna,
      },
      DLCarrier: {
        name: 'Uplink Carrier',
        step: 'downlink',
        form: FormsTemplate.DL_carrier,
        atm: FormsTemplate.DL_atmosphere,
      },
      DLTransmitter: {
        name: 'Groundstation Transmitter',
        step: 'downlink',
        form: FormsTemplate.DL_transmitter_SC,
        antenna: FormsTemplate.DL_SC_tx_antenna,
      },
      DLReceiver: {
        name: 'Spacecraft Receiver',
        step: 'downlink',
        form: FormsTemplate.DL_receiver_GS,
        antenna: FormsTemplate.DL_GS_rx_antenna,
      },
    };
  }
  /* Inventory gives access to neighbor for each step,
  useful when one of the page is updated and we want to
  know if step is complete : page -> step -> neighbors */
  private inventory: { [key: string]: string[] } = {
    geometry: ['geometry'],
    uplink: ['ULCarrier', 'ULTransmitter', 'ULReceiver'],
    downlink: ['DLCarrier', 'DLTransmitter', 'DLReceiver'],
  };

  public validity: any = {};

  // Both are public for testing purposes
  public formValidity: any = {};
  public pageValidity: any = {};

  public componentName: string = 'Geometry';
  public componentId: string = 'geometry';
  public currentStep: string = 'geometry';

  public currentTemplate: Form = this.FormsTemplate.geometry;
  public currentAntenna: Form = Antennas.genericAntenna;
  public atmosphere: Form = this.FormsTemplate.UL_atmosphere;
  public antennaName: string = '';
  public hasAntennaCard: boolean = false;
  public hasAtmCard: boolean = false;
  public templates: { [key: string]: { name: string; step: string; form: Form; atm?: Form; antenna?: Form } } = {};

  ngOnInit(): void {
    this.validity.steps = {
      geometry: 'none',
      uplink: 'none',
      downlink: 'none',
      results: 'none',
    };

    Object.entries(this.templates).forEach(([pageKey, pageValue]) => {
      this.pageValidity[pageKey] = {};
      this.formValidity[pageKey] = {};
      Object.entries(pageValue).forEach(([key, value]) => {
        if (key !== 'step' && key !== 'name') {
          const v = <Form>value;
          this.pageValidity[pageKey][v.componentId] = 'unvisited';
        }
      });
    });

    this.route.queryParams.subscribe((params) => {
      if (params.component) {
        this.componentId = params.component;
      }
      const currentComponentTemplate = this.templates[this.componentId];
      if (currentComponentTemplate) {
        this.currentStep = currentComponentTemplate.step;
        this.componentName = currentComponentTemplate.name;
        this.currentTemplate = currentComponentTemplate.form;
        this.hasAntennaCard = false;
        this.hasAtmCard = false;
        if (currentComponentTemplate.antenna) {
          this.currentAntenna = currentComponentTemplate.antenna;
          this.antennaName = this.currentAntenna.componentName || 'Antenna';
          this.hasAntennaCard = true;
        }
        if (currentComponentTemplate.atm) {
          this.atmosphere = currentComponentTemplate.atm;
          this.hasAtmCard = true;
        }
      } else {
        this.logger.debug("The selected template doesn't exist, please check the variable name used");
      }
    });
  }

  public handleError(event: { id: string; validity: 'valid' | 'invalid' | 'none' }) {
    if (event.id !== '' && this.componentId) {
      // this.logger.error(event.id, event.validity);
      this.pageValidity[this.componentId][event.id] = event.validity;
      this.refreshPageValidity(this.componentId);
      this.updateStepsValidity(this.componentId);
    }
  }

  public refreshPageValidity(pageId: string) {
    /**
     * This function updates the validity of a page based on its internal 'formFragments' validities.
     * Once again, the dependency is the following :
     * "Step/Groups validity" --> "Pages validity" --> "FormFragments validity"
     * ex: Uplink validity --> Carrier, Transmitter, Receiver validities --> Carrier, Environment, Rx Antenna, ... validities
     *
     * This function could be tidied up. At least it is tested.
     */
    let valid = 'none';
    if (Object.values(this.pageValidity[pageId]).includes('invalid')) valid = 'invalid';
    if (Object.values(this.pageValidity[pageId]).every((item) => item === 'valid')) valid = 'valid';
    this.formValidity[pageId] = valid;
    if (!valid) this.logger.error(pageId);
  }

  public updateStepsValidity(id: string) {
    const { step } = this.templates[this.componentId];
    let valid: boolean = true;
    let unvisited: boolean = false;
    let validity: string = 'valid';

    // this.logger.warn('validity', this.formValidity);
    this.inventory[step].forEach((neighbor) => {
      if (this.formValidity[neighbor] === 'invalid') {
        // this.logger.error('invalid neighbor', neighbor);
        valid = false;
      }
      if (!this.formValidity[neighbor]) {
        unvisited = true;
      }
    });
    if (!valid) validity = 'invalid';
    if (unvisited) validity = 'unvisited';
    this.validity.steps[step] = validity;

    // this.logger.warn('Current steps validity', this.validity.steps);
  }
}
