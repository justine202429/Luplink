import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { LinkBudgetScenario, Point } from '../../../shared/models/LinkBudgetScenario.model';
import { LoggerService } from '../../../shared/logger/logger.service';
import { SyntheticDrawingFormService } from '../synthetic-drawing-form.service';
import { DrawingDefault } from '../models/default';

@Component({
  selector: 'lib-synthetic-drawing',
  templateUrl: './synthetic-drawing.component.html',
  styleUrls: ['./synthetic-drawing.component.scss'],
})
export class SyntheticDrawingComponent implements AfterViewInit {
  private height: number = 0;
  private width: number = 0;
  private margin: { top: number; bottom: number; left: number; right: number } = {
    top: 30,
    right: 30,
    bottom: 0,
    left: 30,
  };

  // The x and y axis used by D3
  private x: any;
  private y: any;

  @ViewChild('diagram') diagram: any;
  graphPoints: Point[] = [];

  private budgetText: any;
  private mainSVG: any;
  private labels: any;
  private verticalLinesGroup: any;

  // DefaultLBScenario:LinkBudgetScenario;
  // private drawing: any;
  // private graph: any;

  @Input() linkType: 'uplink' | 'downlink' = 'uplink'; // If not used by results component, choose uplink as default
  @Input() scenarioId: string = 'default';
  @Input() displayGraph: boolean = true;

  // Setters and getter for powerIn and components variables because they require to update the graph
  @Input() get powerIn(): number {
    return this._powerIn;
  }
  set powerIn(value: number) {
    this._powerIn = value;
    this.updateLBScenario(value, this.components, this.linkType);
  }
  private _powerIn: any = 0;
  @Input()
  get components(): any {
    return this._components;
  }
  set components(value: any) {
    this._components = value;
    this.updateLBScenario(this.powerIn, value, this.linkType);
  }
  private _components: any = DrawingDefault.defaultComponents;

  constructor(private drawingService: SyntheticDrawingFormService, private logger: LoggerService) {}

  private updateLBScenario(power: number, components: any, linkType: 'uplink' | 'downlink'): void {
    const scenario = new LinkBudgetScenario(power);
    scenario.addComponents(components);
    scenario.compute(linkType);
    this.drawingService.updateLBScenario(this.scenarioId, scenario);
  }

  ngAfterViewInit(): void {
    // We need to do this after view init because else, the ViewChild result might still be undefined
    if (this.displayGraph) {
      // In some cases, we might just be interested by the drawing
      this.initGraph();
      // Subscribing to the LBScenario models in case they are modified
      this.drawingService.getLBScenario$(this.scenarioId).subscribe((value: LinkBudgetScenario) => {
        this.updateGraphData(value);
      });

      // Initial update with all the current data
      this.updateLBScenario(this.powerIn, this.components, this.linkType);
    }
  }

  private updateLabels(newScenario: LinkBudgetScenario): void {
    const labels = newScenario.getLabels();
    this.labels
      .selectAll('text')
      .data(labels)
      .enter()
      .append('text')
      .text((d: any) => d.name)
      .attr('x', (d: any) => d.position * 9)
      .attr('text-anchor', 'middle');
  }

  private initGraph(): void {
    // points = this.DefaultLBScenario.getPoints();

    this.width = 960 - this.margin.left - this.margin.right; // Same value as for the drawing
    this.height = 240 - this.margin.top - this.margin.bottom;

    this.x = d3.scaleLinear().range([0, this.width]);
    this.y = d3.scaleLinear().range([0, this.height]);
    this.x.domain([0, 100]);

    // Setting the viewbox and div for the graph
    this.mainSVG = d3
      .select(this.diagram.nativeElement)
      .append('svg')
      .attr('id', 'graph')
      .attr(
        'viewBox',
        `${-this.margin.left} ${-this.margin.top} ${this.width + this.margin.left + this.margin.right} ${
          this.height + this.margin.top + this.margin.bottom + 60
        }`
      );
    this.mainSVG
      .append('path')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom);

    // Adding the summary text at the bottom, centered.
    this.budgetText = this.mainSVG
      .append('text')
      .attr('x', (this.width + this.margin.left + this.margin.right) / 2)
      .attr('y', this.height + this.margin.top + this.margin.bottom + 15)
      .attr('text-anchor', 'middle');

    this.verticalLinesGroup = this.mainSVG.append('g').attr('class', 'group');

    this.mainSVG.append('g').attr('class', 'YAxis');

    this.labels = this.mainSVG.append('g').attr('class', 'labels').attr('transform', 'translate(0,-10)');
  }

  private updateGraphData(newScenario: LinkBudgetScenario) {
    const { x, y } = this;
    const points = newScenario.getPoints();
    const powerOut = newScenario.getPowerOut();

    this.updateLabels(newScenario);

    // this.logger.debug('Updating graph, points are :', points);
    // this.logger.debug('newScenario is:', newScenario);

    // Careful with this one, returns (min, max) but domain expects (up, down) so trouble with yaxis
    const [min, max] = <[number, number]>d3.extent(points, (point: { x: number; y: number }) => point.y) ?? [0, -150];

    this.y.domain([max, min]);

    const valueline = d3
      .line()
      .x((d: any) => x(d.x) ?? x(0))
      .y((d: any) => y(d.y) ?? y(0));

    // Setting the plot line
    this.mainSVG
      .select('path')
      .datum(points)
      .attr('class', 'line')
      .transition()
      .duration(1000)
      .attr('d', <any>valueline)
      .attr('stroke-width', 2)
      .attr('fill', '#FFFFFF')
      .attr('stroke', '#111111');

    // Setting the YAxis
    this.mainSVG.select('.YAxis').transition().duration(1000).call(d3.axisLeft(this.y));

    // The vertical lines, here the *9 factor is explained by the 100px -> (960-60)px conversion
    this.verticalLinesGroup.selectAll('line').remove();

    this.verticalLinesGroup
      .selectAll('line')
      .data(points)
      .enter()
      .append('line')
      .attr('class', 'vert-line')
      .attr('x1', (d: any) => d.x * 9)
      .attr('y1', this.height)
      .attr('x2', (d: any) => d.x * 9)
      .attr('y2', 0)
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', '5,5')
      .attr('stroke', '#888888');

    // Adding a line with power out
    // this.svg
    //   .append('line')
    //   .attr('class', 'horz-line')
    //   .attr('x1', (d:any) => 0)
    //   .attr('y1', powerOut)
    //   .attr('x2', (d:any) => this.width)
    //   .attr('y2', powerOut)
    //   .attr('stroke-width', 1)
    //   .attr('stroke-dasharray', '5,5')
    //   .attr('stroke', '#888888');

    // Adding the formula at bottom
    this.budgetText.text(`Prx = Ptx - Ltx + Gtx - Lpath + Grx - Lrx = ${powerOut.toFixed(1)} dB`);
  }
}
