import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { FormService } from '../../form/form.service';
import { LoggerModule } from '../../shared/logger/logger.module';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    LoggerModule,
  ],
  exports: [
    NavbarComponent,
  ],
})
export class NavbarModule { }
