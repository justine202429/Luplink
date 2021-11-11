import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';
import { NavbarComponent, ViewComponent } from '@luplink/ngx-luplink';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        MockComponent(NavbarComponent),
        MockComponent(ViewComponent),

      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title \'luplink-app\'', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Luplink');
  });
});
