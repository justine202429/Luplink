import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ToastrTestingModule } from '../testing/mocks';
// import { DummyFormsData } from '../models/DummyFormsData.model';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrTestingModule],
      providers: [
        FormBuilder, // DummyFormsData,
      ],
    });
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
