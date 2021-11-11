import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MockComponent } from 'ng-mocks';
import { FormsTemplate } from 'projects/luplink-app/src/app/models/FormsTemplate';
import { JSatOrbLinkComponent } from '../../luplink-jsatorb-import/luplink-jsatorb-import.component';
import { ENVIRONMENT_TOKEN, FORM_TEMPLATE_TOKEN } from '../../shared/dependencies';
import { mockEnvironment, ToastrTestingModule } from '../../shared/testing/mocks';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        { provide: ENVIRONMENT_TOKEN, useValue: mockEnvironment },
        { provide: FORM_TEMPLATE_TOKEN, useValue: FormsTemplate },
        FormBuilder,
        MockComponent(JSatOrbLinkComponent),
      ],
      imports: [
        ToastrTestingModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        FontAwesomeModule,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
