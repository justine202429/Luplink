import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SyntheticDrawingFormComponent } from './synthetic-drawing-form/synthetic-drawing-form.component';
import { SyntheticDrawingComponent } from './synthetic-drawing-display/synthetic-drawing.component';
import { SyntheticDrawingFormService } from './synthetic-drawing-form.service';
import { LoggerModule } from '../../shared/logger/logger.module';

@NgModule({
  declarations: [
    SyntheticDrawingFormComponent,
    SyntheticDrawingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoggerModule,
  ],
  exports: [
    SyntheticDrawingFormComponent,
    SyntheticDrawingComponent,
  ],
  providers: [
    SyntheticDrawingFormService,
  ],

})
export class SyntheticDrawingModule { }
