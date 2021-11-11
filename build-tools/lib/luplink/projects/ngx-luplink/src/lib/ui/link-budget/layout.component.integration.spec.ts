// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import {
//   ComponentFixture, fakeAsync, TestBed, tick,
// } from '@angular/core/testing';
// import { FormBuilder } from '@angular/forms';
// import { RouterTestingModule } from '@angular/router/testing';
// import { MockComponent } from 'ng-mocks';
// import { LoggerService } from '@luplink/ngx-luplink';
// import { mockEnvironment, MockupLoggerService } from '@luplink/ngx-luplink/';
// import { By } from '@angular/platform-browser';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { Router } from '@angular/router';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { NavigationSidebarComponent } from '@luplink/ngx-luplink';
// import { ResultSidebarComponent } from '@luplink/ngx-luplink';
// import { FormComponent } from '@luplink/ngx-luplink';
// import { SimpleDocumentationComponent } from '@luplink/ngx-luplink';
// import { CardComponent } from '@luplink/ngx-luplink';

// import { FormModule } from '@luplink/ngx-luplink';
// import { StepbarComponent } from '@luplink/ngx-luplink';
// import { FormsTemplate } from 'projects/luplink-app/src/app/models/FormsTemplate';
// import { JSatOrbLinkComponent } from 'projects/ngx-luplink/src/public-api';
// import { LayoutComponent } from './layout.component';
// import { routes } from '../app.routes';
// import { ENVIRONMENT_TOKEN, FORM_TEMPLATE_TOKEN } from '../../shared/dependencies';
// import { FormService } from '../../form/form.service';

// // #TODO: Write tests
// describe('LayoutComponentIntegration', () => {
//   // let component: LayoutComponent;
//   let fixture: ComponentFixture<LayoutComponent>;
//   let template: FormComponent;
//   let router: Router;
//   // let location: Location;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [
//         LayoutComponent,
//         NavigationSidebarComponent,
//         CardComponent,
//         FormComponent,
//         MockComponent(SimpleDocumentationComponent),
//         MockComponent(StepbarComponent),
//         MockComponent(ResultSidebarComponent),
//         MockComponent(JSatOrbLinkComponent),
//       ],
//       imports: [
//         HttpClientTestingModule,
//         RouterTestingModule.withRoutes(routes),
//         FontAwesomeModule,
//         FormModule,
//         NoopAnimationsModule,
//       ],
//       providers: [
//         { provide: LoggerService, useClass: MockupLoggerService },
//         { provide: FORM_TEMPLATE_TOKEN, useValue: FormsTemplate },
//         { provide: ENVIRONMENT_TOKEN, useValue: mockEnvironment },
//         FormBuilder,
//         FormService],
//     })
//       .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LayoutComponent);
//     // component = fixture.componentInstance;
//     // console.log(fixture.componentInstance.currentTemplate.componentId);
//     fixture.detectChanges();
//   });
//   // Some issues with archives of form
//   it('should display the correct template based on selected component', fakeAsync(() => {
//     const menu = fixture.debugElement.queryAll(By.css('.navbar-menu'));
//     // console.log(menu.length);
//     // console.log(fixture.debugElement.queryAll(By.css('.card-header-title')));
//     // console.log(fixture.debugElement.queryAll(By.css('.card-header-title'))[0]);
//     const title = fixture.debugElement.queryAll(By.css('.card-header-title'))[0].nativeElement.innerText;
//     console.log(title);
//     <HTMLElement>(menu[5].nativeElement).click();

//     fixture.whenStable().then(() => {
//       fixture.detectChanges();
//       // console.log(fixture.debugElement.queryAll(By.css('.card-header-title'))[0].nativeElement.innerText);
//       // We make sure the title of the card has changed
//       expect(fixture.debugElement.queryAll(By.css('.card-header-title'))[0].nativeElement.innerText).not.toEqual(title);
//     });
//   }));

//   fit('should keep the state of components when switching template', fakeAsync(() => {
//     router = TestBed.inject(Router);
//     template = <FormComponent>fixture.debugElement.query(By.directive(FormComponent)).componentInstance;
//     router.initialNavigation();
//     // Navigate to geometry
//     router.navigateByUrl('/luplink?component=geometry');
//     tick();
//     fixture.detectChanges();

//     let field = <HTMLInputElement>fixture.nativeElement.querySelector('input');
//     field.value = '123456789';
//     field.dispatchEvent(new Event('input'));
//     field.dispatchEvent(new Event('blur'));
//     tick();

//     // Save 'local form'
//     const savedForm = template.localForm.value;
//     // Navigate elsewhere
//     router.navigateByUrl('/luplink?component=DLTransmitter');
//     tick();
//     fixture.detectChanges();

//     // Go back to geometry
//     router.navigateByUrl('/luplink?component=geometry');
//     tick();
//     fixture.detectChanges();

//     // Check if values are still the same
//     console.log(template.localForm.value);
//     console.log(savedForm);
//     expect(template.localForm.value).toEqual(savedForm);

//     // Change value and check that fields are different
//     field = <HTMLInputElement>fixture.nativeElement.querySelector('input');
//     field.value = '987654321';
//     field.dispatchEvent(new Event('input'));
//     field.dispatchEvent(new Event('blur'));
//     tick();

//     expect(template.localForm.value).not.toEqual(savedForm);
//   }));
// });
// // https://christianlydemann.com/complete-guide-to-angular-testing/ (Separating execution of unit tests and integration tests)
// // https://codecraft.tv/courses/angular/unit-testing/asynchronous/ (asynchronous testing)
