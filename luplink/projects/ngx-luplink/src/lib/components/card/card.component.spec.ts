import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [FontAwesomeModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.title = 'Title';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    expect(fixture.debugElement.query(By.css('.card-header-title')).nativeElement.innerText).toEqual(component.title);
  });

  it('should collapse when clicking on button', () => {
    // We click on the collapse button and check that the content disappears
    expect(fixture.debugElement.queryAll(By.css('.card-content')).length === 1);
    const collapseButton = <HTMLElement>fixture.debugElement.query(By.css('.is-link')).nativeElement;
    collapseButton.click();
    expect(fixture.debugElement.queryAll(By.css('.card-content')).length === 0);
  });
});
