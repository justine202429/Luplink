import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormComponent } from './component/form.component';
import { LoggerModule } from '../shared/logger/logger.module';
import { LoggerService } from '../shared/logger/logger.service';
import { FormService } from './form.service';

@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    LoggerModule.forRoot(),
  ],
  exports: [
    FormComponent,
  ],
  providers: [
    FormService,
    LoggerService,
  ],
})
export class FormModule {

}
