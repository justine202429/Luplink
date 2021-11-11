import { Component, Input, OnInit } from '@angular/core';
import {
  faAngleDown,
  faCheckCircle,
  faExclamationTriangle,
  faFileDownload,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { APIResult, Result, Element } from '../../../../shared/models/Results.model';
import ComputeLinkBudgetService from '../../../../services/compute-link-budget.service';
import { LoggerService } from '../../../../shared/logger/logger.service';
import { FormService } from '../../../../form/form.service';
import { SyntheticDrawingFormService } from '../../../synthetic-drawing/synthetic-drawing-form.service';

@Component({
  selector: 'lib-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  public fullResult2: Result;

  public faCheck = faCheckCircle;
  public faWarn = faExclamationTriangle;
  public faError = faTimesCircle;

  public download = faFileDownload;
  public linkStatus?: {
    uplink: {
      margin: number;
      status: string;
      message: string;
    };
    downlink: {
      margin: number;
      status: string;
      message: string;
    };
  };
  public statusStyle: string = '';
  private previousCalculationResults: APIResult = { uplink: [], downlink: [] };
  public deltaUL: string[] = []; // Stores the difference with previous value
  public deltaDL: string[] = [];
  public diagramParamsUplink: { powerIn: number; diagramComponents: any };
  public diagramParamsDownlink: { powerIn: number; diagramComponents: any };
  showUplink: boolean = true;
  // public diagramComponents: any;
  // public powerIn: number;
  faAngleDown = faAngleDown;

  public collapsed: {
    uplink: { [section: string]: boolean };
    downlink: { [section: string]: boolean };
  } = { uplink: {}, downlink: {} };

  @Input() minimal: boolean = false;

  // @Input() keys: string[] = [
  //   'tx_amplifier_power',
  //   'tx_circuit_loss',
  //   'tx_antenna_gain',
  //   'eirp',
  //   'ebno_ratio_margin',
  // ];

  public fullKeys2: { key: string; value: string[] }[] = [
    {
      key: 'Transmitter',
      value: ['tx_amplifier_power', 'tx_circuit_loss', 'tx_antenna_gain', 'eirp'],
    },

    {
      key: 'Path',
      value: ['slant_range', 'tx_antenna_angle', 'free_space_path_loss', 'medium_loss', 'total_path_loss'],
    },

    {
      key: 'Receiver',
      value: [
        'received_isotropic_signal_level',
        'rx_antenna_pointing_loss',
        'rx_antenna_gain',
        'rx_circuit_loss',
        'rx_system_noise_temperature',
        'g_t_figure_of_merit',
        'received_noise_power_density',
        'cno_ratio',
        'bit_rate',
        'ebno_ratio',
        'ebno_ratio_threshold',
        'ebno_ratio_margin',
      ],
    },
  ];
  public fullKeys: string[] = [
    'tx_amplifier_power',
    'tx_circuit_loss',
    'tx_antenna_gain',
    'eirp',
    'slant_range',
    'tx_antenna_pointing_loss',
    'free_space_path_loss',
    'medium_loss',
    'total_path_loss',
    'received_isotropic_signal_level',
    'rx_antenna_pointing_loss',
    'rx_antenna_gain',
    'rx_circuit_loss',
    'rx_system_noise_temperature',
    'g_t_figure_of_merit',
    'received_noise_power_density',
    'cno_ratio',
    'bit_rate',
    'ebno_ratio',
    'ebno_ratio_threshold',
    'ebno_ratio_margin',
  ];

  public params: { [key: string]: { label: string; section: string } } = {
    tx_amplifier_power: { label: 'Amplifier power', section: 'Transmitter' },
    tx_circuit_loss: { label: 'Circuit Loss', section: 'Transmitter' },
    tx_antenna_gain: { label: 'Antenna Gain', section: 'Transmitter' },
    tx_antenna_angle: { label: 'Depointing Angle', section: 'Transmitter' },
    eirp: { label: 'EIRP', section: 'Transmitter' },
    slant_range: { label: 'Slant Range', section: 'Path' },

    tx_antenna_pointing_loss: { label: 'Pointing Losses', section: 'Path' },
    free_space_path_loss: { label: 'FSL', section: 'Path' },
    medium_loss: { label: 'Medium Losses', section: 'Path' },
    total_path_loss: { label: 'Total Path Loss', section: 'Path' },
    received_isotropic_signal_level: { label: 'Isotropic power received', section: 'Receiver' },
    rx_antenna_pointing_loss: { label: 'Pointing Losses', section: 'Receiver' },
    rx_antenna_angle: { label: 'Depointing Angle', section: 'Receiver' },
    rx_antenna_gain: { label: 'Antenna Gain', section: 'Receiver' },
    rx_circuit_loss: { label: 'Circuit Loss', section: 'Receiver' },
    rx_system_noise_temperature: { label: 'Noise Temperature', section: 'Receiver' },
    g_t_figure_of_merit: { label: 'G/T Figure of Merit', section: 'Receiver' },
    received_noise_power_density: { label: 'Noise Power Density', section: 'Receiver' },
    cno_ratio: { label: 'C/N0 ratio', section: 'Receiver' },
    bit_rate: { label: 'Bit Rate', section: 'Receiver' },
    ebno_ratio: { label: 'Eb/N0 ratio', section: 'Receiver' },
    ebno_ratio_threshold: { label: 'Eb/N0 threshold', section: 'Receiver' },
    ebno_ratio_margin: { label: 'Eb/N0 margin', section: 'Receiver' },
  };

  constructor(
    private computeLinkBudget: ComputeLinkBudgetService,
    private logger: LoggerService,
    private formService: FormService,
    private drawingService: SyntheticDrawingFormService
  ) {
    // Setting up key to display when no data has already been provided
    this.fullResult2 = { uplink: [], downlink: [] };
    this.fullKeys2.forEach((section) => {
      // Building a default array before the first calculation
      const k: Element[] = section.value.map((id) => ({ name: id, value: 0, unit: '' }));
      this.fullResult2.uplink.push({ group: section.key, elt: k });
      this.fullResult2.downlink.push({ group: section.key, elt: k });
      // Updating the collapsed object
      this.collapsed.uplink[section.key] = false;
      this.collapsed.downlink[section.key] = false;
    });
    this.diagramParamsUplink = {
      powerIn: this.drawingService.powerIn,
      diagramComponents: this.drawingService.components,
    };
    this.diagramParamsDownlink = {
      powerIn: this.drawingService.powerIn,
      diagramComponents: this.drawingService.components,
    };
    // this.diagramComponents = this.drawingService.defaultComponents;
    // this.powerIn = this.drawingService.powerIn;
  }

  ngOnInit() {
    this.computeLinkBudget.getResult$().subscribe((calculationResult: APIResult) => {
      this.deltaUL = this.computeDelta(calculationResult.uplink, this.previousCalculationResults.uplink);
      this.deltaDL = this.computeDelta(calculationResult.downlink, this.previousCalculationResults.downlink);
      // this.deltaDL = this.computeDelta(calculationResult.downlink, this.fullResult2.downlink);
      this.previousCalculationResults = calculationResult;

      if (calculationResult.uplink || calculationResult.downlink) {
        const currentResult = this.formatResults(calculationResult, this.params);
        this.fullResult2 = currentResult;
        // console.log(this.diagramParams);
        if (calculationResult.uplink) {
          // This makes our array an object so we can pick the values we want
          const res = calculationResult.uplink.reduce(
            (acc, { name, value, unit }) => ({ ...acc, [name]: { value, unit } }),
            {}
          );
          // This updates the data passed to the diagram
          // console.log('a');
          const diagramResults = this.refreshDiagramComponents(res);
          this.diagramParamsUplink = {
            powerIn: diagramResults.powerIn,
            diagramComponents: diagramResults.diagramComponents,
          };
        }
        if (calculationResult.downlink) {
          // This makes our array an object so we can pick the values we want
          const res = calculationResult.downlink.reduce(
            (acc, { name, value, unit }) => ({ ...acc, [name]: { value, unit } }),
            {}
          );
          // This updates the data passed to the diagram
          // console.log('b');
          const diagramResults = this.refreshDiagramComponents(res);
          this.diagramParamsDownlink = {
            powerIn: diagramResults.powerIn,
            diagramComponents: diagramResults.diagramComponents,
          };
        }
        // console.log(this.diagramParams);
      }
    });
  }
  computeDelta(current: Element[], previous: Element[]) {
    // This computes the difference between previous data and current
    const delta: string[] = [];
    // result is null or undefined
    if (!previous || !current) return delta;
    for (let i = 0; i < current.length; i += 1) {
      if (i < previous.length && JSON.stringify(current[i]) !== JSON.stringify(previous[i])) {
        delta.push(current[i].name);
      }
    }
    return delta;
  }

  exportResults(format: string): void {
    // This function is supposed to take the results and export them to the markdown format, allowing user to download them.
    // mardown-pdf is a module that even allows the conversion from markdown to pdf.
    let configURL: string = '';
    switch (format) {
      case 'md':
        configURL = `data:application/md;charset=UTF-8,${encodeURIComponent(this.resultsToMD())}`;
        break;
      // case 'pdf':
      //   configURL = `data:application/pdf;charset=UTF-8,${this.resultToPDF()}`;
      //   break;
      case 'json':
        configURL = `data:application/json;charset=UTF-8,${encodeURIComponent(
          JSON.stringify(this.fullResult2, null, 2)
        )}`;
        break;
      default:
        // this.logger.debug()
        configURL = `data:application/json;charset=UTF-8,${encodeURIComponent(
          JSON.stringify(this.fullResult2, null, 2)
        )}`;
    }
    // Create a placeholder element for this data
    const anchor = document.createElement('a');
    anchor.href = configURL;
    anchor.target = '_blank';
    anchor.download = `results.${format}`;

    anchor.click();
    // Removing placeholder element
    anchor.remove();
  }

  resultsToMD(): string {
    let markdownOutput: string = '';
    markdownOutput += '# Uplink link budget\n';
    markdownOutput += '| Component | Value | Link Budget |\n';
    markdownOutput += '|---|---|---|\n';
    this.fullResult2.uplink.forEach((value) => {
      markdownOutput += `|**${value.group}**| | |\n`;
      // markdownOutput += '||||\n';
      value.elt.forEach((line) => {
        markdownOutput += `|${this.params[line.name].label}|${line.value.toPrecision(3)} ${line.unit}| |\n`;
      });
    });
    markdownOutput += '# Downlink link budget\n';
    markdownOutput += '| Component | Value | Link Budget |\n';
    markdownOutput += '|---|---|---|\n';

    this.fullResult2.downlink.forEach((value) => {
      markdownOutput += `|**${value.group}**| | |\n`;
      // markdownOutput += '||||\n';
      value.elt.forEach((line) => {
        markdownOutput += `|${this.params[line.name].label}|${line.value.toPrecision(3)} ${line.unit}| |\n`;
      });
    });

    return markdownOutput;
  }

  formatResults(
    newResults: APIResult,
    params: { [key: string]: { label: string; section: string } } = this.params
  ): Result {
    // This function formats the result from an array of values/units pair to group with sections name.
    // This provides 'discoverable' results that can be used by the template with ngFor

    // Temporary result allows us to make the conversion from APIResult to Result
    const result: Result = { uplink: [], downlink: [] };
    let tempResult: { [group: string]: Element[] } = {};
    if (newResults.uplink) {
      newResults.uplink.forEach((element) => {
        const { section } = params[element.name];
        const line = { name: element.name, value: element.value, unit: element.unit };
        if (tempResult[section]) {
          tempResult[section].push(line);
        } else {
          tempResult[section] = [line];
        }
      });
      // console.log(tempResult);
      result.uplink = Object.entries(tempResult).map(([group, elt]) => ({ group, elt }));
    }
    tempResult = {};
    if (newResults.downlink) {
      newResults.downlink.forEach((element) => {
        const { section } = params[element.name];
        const line = { name: element.name, value: element.value, unit: element.unit };
        if (tempResult[section]) {
          tempResult[section].push(line);
        } else {
          tempResult[section] = [line];
        }
      });
      // console.log(tempResult);
      result.downlink = Object.entries(tempResult).map(([group, elt]) => ({ group, elt }));
    }
    this.calculateLinkSummary(newResults.uplink, newResults.downlink);
    return result;
  }

  calculateLinkSummary(resultUL: any, resultDL: any) {
    const uplinkMargin = resultUL[resultUL.length - 1];
    const downlinkMargin = resultDL[resultDL.length - 1];

    // Bad code, could be improved #FIXME
    const systemMarginUplink = this.formService.getComponentValues('system_margin', 'uplink', 'carrier')?.value ?? 6;
    const systemMarginDownlink =
      this.formService.getComponentValues('system_margin', 'downlink', 'carrier')?.value ?? 6;
    // The default success message
    this.linkStatus = {
      uplink: {
        margin: uplinkMargin.value,
        status: 'is-success',
        message: `<b>This link closes</b><br>Eb/N0 margin = ${(Math.round(uplinkMargin.value * 100) / 100).toFixed(
          2
        )} ${uplinkMargin.unit} > ${systemMarginUplink} dB = System Margin`,
      },
      downlink: {
        margin: downlinkMargin.value,
        status: 'is-success',
        message: `<b>This link closes</b><br>Eb/N0 margin = ${(Math.round(downlinkMargin.value * 100) / 100).toFixed(
          2
        )} ${downlinkMargin.unit} > ${systemMarginDownlink} dB = System Margin`,
      },
    };
    // In other cases, warning or danger message
    Object.entries(this.linkStatus).map(([key, link]) => {
      const localLinkStatus: { margin: number; status: string; message: string } = link;
      // console.log(key);
      const localSystemMargin = key === 'uplink' ? systemMarginUplink : systemMarginDownlink;
      if (link.margin < localSystemMargin) {
        localLinkStatus.status = 'is-warning';
        localLinkStatus.message = `<b>This link closes with a low margin</b><br>Eb/N0 margin = ${(
          Math.round(link.margin * 100) / 100
        ).toFixed(2)} dB < ${localSystemMargin} dB = System Margin`;
      }
      if (link.margin < 0) {
        localLinkStatus.status = 'is-danger';
        localLinkStatus.message = `<b>This link does not close</b><br>Eb/N0 margin = ${(
          Math.round(link.margin * 100) / 100
        ).toFixed(2)} dB < 0dB`;
      }
      return { key, localLinkStatus };
    });
  }

  refreshDiagramComponents(results: any) {
    // console.log(results);
    const powerIn: number = results.tx_amplifier_power.value;
    const diagramComponents = [
      {
        id: 'tx',
        component: {
          label: 'Ptx',
          gain: 0,
          linear: true,
          position: 0,
          width: 15,
        },
      },
      {
        id: 'cableTx',
        component: {
          label: 'Ltx',
          gain: -results.tx_circuit_loss.value,
          linear: true,
          position: 15,
          width: 10,
        },
      },
      {
        id: 'antTx',
        component: {
          label: 'Gtx',
          gain: results.tx_antenna_gain.value,
          linear: false,
          position: 25,
          width: 10,
        },
      },
      {
        id: 'fsl',
        component: {
          label: 'Lpath',
          gain: -results.total_path_loss.value,
          linear: true,
          position: 35,
          width: 30,
        },
      },
      {
        id: 'antRx',
        component: {
          label: 'Grx',
          gain: results.rx_antenna_gain.value,
          linear: false,
          position: 65,
          width: 10,
        },
      },
      {
        id: 'cableRx',
        component: {
          label: 'Lrx',
          gain: -results.rx_circuit_loss.value,
          linear: true,
          position: 75,
          width: 10,
        },
      },
      {
        id: 'rx',
        component: {
          label: 'Prx',
          gain: 0,
          linear: true,
          position: 85,
          width: 15,
        },
      },
    ];
    return { powerIn, diagramComponents };
  }
}
