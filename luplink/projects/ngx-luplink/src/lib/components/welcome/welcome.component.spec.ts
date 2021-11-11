import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MockComponent } from 'ng-mocks';
import { InputValueComponent, NgxNanospaceClientLibModule } from 'ngx-nanospace-client-lib';
import { DropdownProjectComponent } from 'ngx-nanospace-client-lib/lib/components/dropdown-project/dropdown-project.component';
import { InputIdComponent } from 'ngx-nanospace-client-lib/lib/components/input-id/input-id.component';
import { LoggerService } from 'projects/ngx-luplink/src/lib/shared/logger/logger.service';
import { mockEnvironment, MockupLoggerService } from 'projects/ngx-luplink/src/lib/shared/testing/mocks';
import { FormsTemplate } from 'projects/luplink-app/src/app/models/FormsTemplate';
import { NavigationSidebarComponent } from '../navigation-sidebar/navigation-sidebar.component';

import { WelcomeComponent } from './welcome.component';
import { ENVIRONMENT_TOKEN, FORM_TEMPLATE_TOKEN } from '../../shared/dependencies';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent,
        MockComponent(NavigationSidebarComponent),
        // MockComponent(InputValueComponent),
        // MockComponent(InputIdComponent),
        // MockComponent(DropdownProjectComponent),
        // MockComponent(DropdownProjectComponent)
      ],
      imports: [],
      providers: [
        { provide: LoggerService, useClass: MockupLoggerService },
        { provide: ENVIRONMENT_TOKEN, useValue: mockEnvironment },
        { provide: FORM_TEMPLATE_TOKEN, useValue: FormsTemplate },
        FormBuilder],
      schemas: [NO_ERRORS_SCHEMA], // Errors in the template are ignored for this component due to the use of ngx-nanospace components
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
