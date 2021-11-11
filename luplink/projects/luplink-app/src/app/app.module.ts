import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  ResultSidebarModule,
  StepbarModule,
  SynthesisModule,
  LuplinkModule,
  LayoutModule,
  NavbarModule,
  NavigationSidebarModule,
} from '@luplink/ngx-luplink';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsTemplate } from './models/FormsTemplate';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LuplinkModule.forRoot({ isStandalone: true, defaultForm: FormsTemplate, environment }),
    LayoutModule,
    NavbarModule,
    SynthesisModule,
    NavigationSidebarModule,
    ResultSidebarModule,
    StepbarModule,
    AppRoutingModule,
    // WelcomeModule
    // TotoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
