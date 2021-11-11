import * as d3 from 'd3';

import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { LoggerService } from '../../shared/logger/logger.service';
import { FormService } from '../../form/form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-simple-documentation',
  templateUrl: './simple-documentation.component.html',
  styleUrls: ['./simple-documentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleDocumentationComponent implements AfterViewInit, OnInit {
  @Input() component: string = '';
  public formulas: { [id: string]: string };
  public form: any; // Keeping a copy of the global form to fetch data from it
  hasGeometryBeenDrawn: boolean = false;
  lineLosses: number = 0.0;
  eirp: number = 0.0;
  geometry: string = `
  $\\delta$ is the minimum acceptable elevation angle. It is used for the calculation of the maximum slant range to the spacecraft. This range is then used to compute path losses.

  The slant range is calculated using the following formula :
  <b>$$S=R_e(\\sqrt{[\\frac{r}{R_e}]^2-\\cos^2{\\delta}}-\\sin{\\delta})$$</b><br>
  with:<br>
  <br>
  $S$, the slant range in km<br>
  $r$, the distance of satellite from center of Earth in km ($r= R_e+h$)<br>
  $R_e$, the Earth's radius (in km)<br> $\\delta$, the minimum acceptable elevation angle
  `;

  systemTemperature: string = `
    $$T_s = T_a + T_1 + \\frac{T_2}{G_1} + \\frac{T_3}{G_1G_2}$$
  `;
  // cf: https://github.com/garciparedes/ng-katex
  constructor(
    public formService: FormService,
    private logger: LoggerService,
    private changeDetector: ChangeDetectorRef
  ) {
    this.formulas = {
      sr: 'S=R_e(\\sqrt{(\\frac{r}{R_e})^2-\\cos{2\\delta}}-\\sin{\\delta})',
    };
  }

  svg: any;
  delta: any;
  alt: any;
  sr: any;

  drawGeometry(): void {
    this.svg = d3.select('#sr').select('svg');

    this.delta = this.svg
      .append('text')
      .attr('x', 73)
      .attr('y', 59)
      .attr('text-anchor', 'left')
      .style('font-size', '4px');

    this.alt = this.svg.append('text').attr('x', 5).attr('y', 20).attr('text-anchor', 'left').style('font-size', '4px');

    this.sr = this.svg.append('text').attr('x', 42).attr('y', 42).attr('text-anchor', 'left').style('font-size', '4px');
    this.hasGeometryBeenDrawn = true;

    const geo = this.formService.getFormData().geometry;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    geo && this.updateDiagram(geo);
    this.formService.getFormData$().subscribe((obs: any) => {
      // console.log(obs.getRawValue().geometry);
      // console.log(obs.geometry);
      this.updateDiagram(obs.geometry);
    });
  }
  ngAfterViewInit(): void {
    // If the text hasn't been drawn, we draw it (#sr is always present since we are just hiding it)
    if (!this.hasGeometryBeenDrawn) {
      this.drawGeometry();
    }
  }
  ngOnInit() {
    this.formService.globalForm.valueChanges.subscribe((newForm) => {
      this.form = newForm;
      // let transmitter = this.form.
      this.changeDetector.detectChanges();
    });
  }
  getFormData(component: string): any {
    if (component === 'ULTransmitter') {
      return this.formService.globalForm.value.uplink.transmitter;
    } else if (component === 'DLTransmitter') {
      return this.formService.globalForm.value.downlink.transmitter;
    } else {
      console.warn('Unknown component in simple-documentation.component.ts::getFormData()');
    }
  }

  updateDiagram(geo: any, precision: number = 3) {
    const alt: number = parseFloat(geo.altitude.value);
    const sr: number = parseFloat(geo.slantRange.value);

    this.delta.text(`ẟ=${geo.elevation.value} ${geo.elevation.unit}`);
    this.alt.text(`${alt.toPrecision(precision)} ${geo.altitude.unit}`);
    this.sr.text(`${sr.toPrecision(precision + 1)} ${geo.slantRange.unit}`);
  }
}
