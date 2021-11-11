import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';
import { LayoutComponent } from './layout.component';
import { LuplinkModule } from '../../luplink.module';
import { FormsTemplate } from '../../shared/testing/mockFormsTemplate';
import { LoggerModule } from '../../shared/logger/logger.module';
import { JSatOrbLinkComponent } from '../../luplink-jsatorb-import/luplink-jsatorb-import.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  CardComponent,
  StepbarComponent,
  SimpleDocumentationComponent,
  NavigationSidebarComponent,
  FormComponent,
  ResultSidebarComponent,
} from '@luplink/ngx-luplink';
import { KatexModule } from 'ng-katex';
// https://christianlydemann.com/complete-guide-to-angular-testing/ (Separating execution of unit tests and integration tests)
describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LayoutComponent,
        MockComponent(CardComponent),
        MockComponent(StepbarComponent),
        MockComponent(SimpleDocumentationComponent),
        MockComponent(NavigationSidebarComponent),
        MockComponent(FormComponent),
        MockComponent(ResultSidebarComponent),
        MockComponent(JSatOrbLinkComponent),
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        KatexModule,
        NoopAnimationsModule,
        // LuplinkModule,
        LuplinkModule.forRoot({
          defaultForm: FormsTemplate,
          environment: {
            luplinkEndpoint: 'http://localhost:8001/',
            debugMode: true,
            enableNanospace: true,
            production: false,
          },
        }),
        LoggerModule,
      ],
      providers: [
        // { provide: LoggerService, useClass: MockupLoggerService },
        FormBuilder,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle page validity correctly (bug)', () => {
    // Some example to test the function is behaving as expected
    const pageValidity = {
      geometry: { geometry: 'unvisited' },
      ULCarrier: {
        carrier: 'valid',
        atmosphere: 'unvisited',
      },
      ULTransmitter: {
        transmitter: 'invalid',
        transmitter_antenna: 'unvisited',
      },
      ULReceiver: {
        receiver: 'valid',
        receiver_antenna: 'valid',
      },
      DLCarrier: {
        carrier: 'unvisited',
        atmosphere: 'unvisited',
      },
      DLTransmitter: {
        transmitter: 'unvisited',
        transmitter_antenna: 'unvisited',
      },
      DLReceiver: {
        receiver: 'unvisited',
        receiver_antenna: 'unvisited',
      },
    };
    component.pageValidity = pageValidity;

    component.refreshPageValidity('ULCarrier');
    component.refreshPageValidity('ULTransmitter');
    component.refreshPageValidity('ULReceiver');
    component.refreshPageValidity('DLCarrier');

    const { formValidity } = component;

    expect(formValidity.ULCarrier).toEqual('none');
    expect(formValidity.ULTransmitter).toEqual('invalid');
    expect(formValidity.ULReceiver).toEqual('valid');
    expect(formValidity.DLCarrier).toEqual('none');
    // Also testing the test in order to increase my trust in it
    expect(formValidity.ULReceiver).not.toEqual('invalid');
  });
});
