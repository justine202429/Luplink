import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { LoggerService } from 'projects/ngx-luplink/src/lib/shared/logger/logger.service';
import { RouterTestingModule } from '@angular/router/testing';
import { mockEnvironment, MockFormService, MockupLoggerService } from '../shared/testing/mocks';
import mockJSatOrbData from '../shared/testing/mockJSatOrbData.json';
import { SaveLoadService } from './save-load.service';
import { FormService } from '../form/form.service';
import { ENVIRONMENT_TOKEN } from '../shared/dependencies';

describe('SaveLoadService', () => {
  let service: SaveLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: LoggerService, useClass: MockupLoggerService },
        { provide: ENVIRONMENT_TOKEN, useValue: mockEnvironment },
        { provide: FormService, useValue: MockFormService },
        FormBuilder,
      ],
    });
    service = TestBed.inject(SaveLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should load the provided file', (done) => {
    const blob = new Blob([JSON.stringify(mockJSatOrbData)], { type: 'text/jso' });
    // blob.lastModifiedDate = '';
    // blob.name = 'filename';
    const file = <File>blob;
    const fileList: FileList = {
      0: file,
      1: file,
      length: 2,
      item: (index: number) => file,
    };
    service.importJSatOrbConfigFile(fileList).subscribe(
      (value) => {
        // console.log(value);
        expect(value?.satellites.length).toBeGreaterThanOrEqual(1);
        done();
      },
    );
    // const fileList: FileList = [new File()];

    // spyOn(service.).and.returnValue(fileList);
  });
});
