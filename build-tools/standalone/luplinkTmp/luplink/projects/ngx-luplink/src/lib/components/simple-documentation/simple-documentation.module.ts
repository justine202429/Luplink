import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { KatexModule } from 'ng-katex';
import { FormService } from '../../form/form.service';
import { LoggerModule } from '../../shared/logger/logger.module';
import { SyntheticDrawingModule } from '../synthetic-drawing/synthetic-drawing.module';
import { NavigationSidebarModule } from '../navigation-sidebar/navigation-sidebar.module';
import { CardModule } from '../card/card.module';
import { SimpleDocumentationComponent } from './simple-documentation.component';

@NgModule({
  declarations: [
    SimpleDocumentationComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    LoggerModule.forRoot(),
    KatexModule,
  ],
  exports: [
    SimpleDocumentationComponent,
  ],
})
export class SimpleDocumentationModule { }
