import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { NanospaceRequestService, NanospaceService, NgxNanospaceClientLibModule } from 'ngx-nanospace-client-lib';
import { FormService } from '../../form/form.service';
import { LoggerModule } from '../../shared/logger/logger.module';
import { SyntheticDrawingModule } from '../synthetic-drawing/synthetic-drawing.module';
import { NavigationSidebarModule } from '../navigation-sidebar/navigation-sidebar.module';
import { CardModule } from '../card/card.module';
import { WelcomeComponent } from './welcome.component';
import { FormModule } from '../../form/form.module';

@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    LoggerModule.forRoot(),
    FormModule,
    CardModule,
    NavigationSidebarModule,
    NgxNanospaceClientLibModule,
  ],
  exports: [
    WelcomeComponent,
  ],
  providers: [
    // NanospaceRequestService,
    // NanospaceService,
  ],
})
export class WelcomeModule { }
