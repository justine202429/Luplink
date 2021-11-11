import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ENVIRONMENT_TOKEN } from '../../shared/dependencies';
import { mockEnvironment } from '../../shared/testing/mocks';
// import { AppRoutingModule } from 'src/app/shared/app-routing.module';

import { NavigationSidebarComponent } from './navigation-sidebar.component';

describe('NavigationSidebarComponent', () => {
  let component: NavigationSidebarComponent;
  let fixture: ComponentFixture<NavigationSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationSidebarComponent],
      providers: [
        { provide: ENVIRONMENT_TOKEN, useValue: mockEnvironment },
        // { provide: FORM_TEMPLATE_TOKEN, useValue: FormsTemplate},
      ],
      imports: [RouterTestingModule, FontAwesomeModule, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
