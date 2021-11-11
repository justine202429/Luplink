import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { LayoutComponent } from './link-budget/layout.component';
import { CardModule } from '../components/card/card.module';
import { FormModule } from '../form/form.module';
import { LoggerModule } from '../shared/logger/logger.module';
import { SimpleDocumentationModule } from '../components/simple-documentation/simple-documentation.module';
import { StepbarModule } from '../components/stepbar/stepbar.module';
import { NavigationSidebarModule } from '../components/navigation-sidebar/navigation-sidebar.module';
import { ResultSidebarModule } from '../components/results/results.module';
import { routes } from './app.routes';
import { ViewComponent } from './view/view.component';
import { JSatOrbLinkComponent } from '../luplink-jsatorb-import/luplink-jsatorb-import.component';
import { JSatOrbLinkService } from '../luplink-jsatorb-import/jsatorb-link.service';
import { CustomRouteReuseStrategy } from '../shared/CustomRouteReuseStrategy';

@NgModule({
  declarations: [
    LayoutComponent,
    ViewComponent,
    JSatOrbLinkComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    FormModule,
    LoggerModule,
    SimpleDocumentationModule,
    StepbarModule,
    NavigationSidebarModule,
    ResultSidebarModule,
    ReactiveFormsModule,

  ],
  exports: [
    LayoutComponent,
    ViewComponent,
    JSatOrbLinkComponent,
  ],
  providers: [
    JSatOrbLinkService,
    // Reusing routes allow us to avoid recreating our components on each router change.
    // Also, faster change between tabs
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: CustomRouteReuseStrategy,
    // }
  ],
})
export class LayoutModule {

}
