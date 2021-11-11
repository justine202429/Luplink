import {
  Component, Input, OnDestroy, OnInit,
} from '@angular/core';
import {
  AbstractControlOptions, FormBuilder, FormGroup, Validators,
} from '@angular/forms';
import { LinkBudgetComponent, LinkBudgetScenario } from '../../../shared/models/LinkBudgetScenario.model';
import { DrawingDefault } from '../models/default';
import { SyntheticDrawingFormService } from '../synthetic-drawing-form.service';

@Component({
  selector: 'lib-synthetic-drawing-form',
  templateUrl: './synthetic-drawing-form.component.html',
  styleUrls: ['./synthetic-drawing-form.component.scss'],
})
export class SyntheticDrawingFormComponent implements OnInit, OnDestroy {
  drawingForm: FormGroup;
  currentScenario: any;
  drawingFormSub: any;
  LBScenarioSub: any;
  // This ties the form to the right LBScenario model, don't forget to include it
  @Input() scenarioId: string = 'default';

  constructor(private formBuilder: FormBuilder, private drawingService:SyntheticDrawingFormService) {
    // This sets the options for our form group
    const controlOptions: AbstractControlOptions = { validators: [Validators.required], updateOn: 'blur' };
    this.drawingForm = this.formBuilder.group({
      power: DrawingDefault.powerIn,
      gains: this.formBuilder.group(DrawingDefault.defaultGains),
    }, controlOptions);
  }

  ngOnInit(): void {
    // When the 'updateOn:blur' is triggered, we call the onSubmit within the new context
    this.drawingFormSub = this.drawingForm.valueChanges.subscribe({
      next: this.onSubmit.bind(this),
    });
    this.LBScenarioSub = this.drawingService.getLBScenario$(this.scenarioId).subscribe((next) => {
      this.currentScenario = next;
    });
  }

  ngOnDestroy() {
    this.drawingFormSub.unsubscribe();
    this.LBScenarioSub.unsubscribe();
  }

  randomizeInputs() {
    // Randomize belongs to the form component, we should randomize here and send data to model after
    const defaultLBScenario: LinkBudgetScenario = this.drawingService.getLBScenario(this.scenarioId);
    const components: { [id: string]: LinkBudgetComponent; } = defaultLBScenario.randomize();

    const newGains: { [id:string]:number } = {};
    const excluded = ['tx', 'rx'];
    Object.entries(components).forEach(([key, value]) => {
      if (!excluded.includes(key)) {
        newGains[key] = value.gain;
      }
    });
    this.drawingForm.patchValue({ gains: newGains });// Update the form values
    defaultLBScenario.compute();
    this.drawingService.updateLBScenario(this.scenarioId, defaultLBScenario);
  }

  onSubmit() {
    const defaultLBScenario = this.drawingService.getLBScenario(this.scenarioId);
    defaultLBScenario.setPowerIn(<number> this.drawingForm.value.power);

    const formValues = this.drawingForm.value.gains;

    defaultLBScenario.editGains(formValues);
    defaultLBScenario.compute();
    this.drawingService.updateLBScenario(this.scenarioId, defaultLBScenario);
  }
}
