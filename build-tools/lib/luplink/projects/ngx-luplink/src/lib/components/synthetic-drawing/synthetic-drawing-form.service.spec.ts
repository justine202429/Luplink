import { TestBed } from '@angular/core/testing';

import { SyntheticDrawingFormService } from './synthetic-drawing-form.service';
// #TODO: Write tests
describe('SyntheticDrawingFormService', () => {
  let service: SyntheticDrawingFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyntheticDrawingFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
