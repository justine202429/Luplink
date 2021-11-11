import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggerService } from 'projects/ngx-luplink/src/lib/shared/logger/logger.service';
import { MockupLoggerService } from 'projects/ngx-luplink/src/lib/shared/testing/mocks';

import { SyntheticDrawingComponent } from './synthetic-drawing.component';
describe('SyntheticDrawingComponent', () => {
  let component: SyntheticDrawingComponent;
  let fixture: ComponentFixture<SyntheticDrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SyntheticDrawingComponent],
      providers: [{ provide: LoggerService, useClass: MockupLoggerService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntheticDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('graph should exist only once even if this component is used twice on the same page', () => {
    TestBed.createComponent(SyntheticDrawingComponent); // Calling ngOnInit() a second time
    const elt = <HTMLElement>fixture.nativeElement;
    expect(elt.querySelectorAll('#graph').length).toEqual(1);

    component.ngAfterViewInit(); // We call the init a second time, expecting it to add another graph
    expect(elt.querySelectorAll('#graph').length).toEqual(2);
    expect(elt.querySelectorAll('#graph').length).not.toEqual(1);
  });
});
