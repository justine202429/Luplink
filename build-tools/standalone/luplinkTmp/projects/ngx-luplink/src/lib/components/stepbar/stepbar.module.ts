import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { FormService } from '../../form/form.service';
import { LoggerModule } from '../../shared/logger/logger.module';
import { SyntheticDrawingModule } from '../synthetic-drawing/synthetic-drawing.module';
import { NavigationSidebarModule } from '../navigation-sidebar/navigation-sidebar.module';
import { CardModule } from '../card/card.module';
import { StepbarComponent } from './stepbar.component';

@NgModule({
  declarations: [
    StepbarComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    LoggerModule.forRoot(),
  ],
  exports: [
    StepbarComponent,
  ],
})
export class StepbarModule { }
