import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { FormService } from '../../form/form.service';
import { LoggerModule } from '../../shared/logger/logger.module';
import { ResultSidebarComponent } from './components/sidebar/result-sidebar.component';
import { ResultsComponent } from './components/results/results.component';
import { SyntheticDrawingModule } from '../synthetic-drawing/synthetic-drawing.module';
import { NavigationSidebarModule } from '../navigation-sidebar/navigation-sidebar.module';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [
    ResultSidebarComponent,
    ResultsComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    LoggerModule.forRoot(),
    CardModule,
    SyntheticDrawingModule,
    NavigationSidebarModule,
  ],
  exports: [
    ResultSidebarComponent,
    ResultsComponent,
  ],
})
export class ResultSidebarModule { }
