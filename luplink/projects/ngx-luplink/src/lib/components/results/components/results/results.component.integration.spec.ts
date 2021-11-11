// /* eslint-disable naming-convention */
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MockComponent } from 'ng-mocks';
import ComputeLinkBudgetService from 'projects/ngx-luplink/src/lib/services/compute-link-budget.service';
import { mockEnvironment, ToastrTestingModule } from 'projects/ngx-luplink/src/lib/shared/testing/mocks';
import mockPOSTData from 'projects/ngx-luplink/src/lib/shared/testing/mockPOSTData.json';
import { CardComponent } from 'projects/ngx-luplink/src/lib/components/card/card.component';
import { NavigationSidebarComponent } from 'projects/ngx-luplink/src/lib/components/navigation-sidebar/navigation-sidebar.component';
import { StepbarComponent } from 'projects/ngx-luplink/src/lib/components/stepbar/stepbar.component';
import { SyntheticDrawingComponent } from 'projects/ngx-luplink/src/lib/components/synthetic-drawing/synthetic-drawing-display/synthetic-drawing.component';
import { FormsTemplate } from 'projects/luplink-app/src/app/models/FormsTemplate';
import { ENVIRONMENT_TOKEN, FORM_TEMPLATE_TOKEN } from 'projects/ngx-luplink/src/lib/shared/dependencies';
import { ResultsComponent } from './results.component';

@Component({
  template: '<app-results></app-results>',
})
class MockAppComponent {
  constructor(private computeLinkBudget: ComputeLinkBudgetService) {}
  public compute() {
    const obs = this.computeLinkBudget.computeLinkBudget();
    // console.log(obs);
    if (obs) {
      // this.loading = true;
      const subscription = obs.subscribe(
        (value: any) => {
          // this.logger.debug('value', value);
          // console.log('computing');
          this.computeLinkBudget.updateResult(value);
          // this.logger.debug("API response:", value)
          // this.loading = false;
          subscription?.unsubscribe();
        },
        () => {
          // this.loading = false;
          // this.logger.debug('error in compute()', err);
          subscription?.unsubscribe();
        }
      );
    }
  }
}

describe('ResultsComponent-Integration', () => {
  let fixture: ComponentFixture<ResultsComponent>;
  let computeService: ComputeLinkBudgetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        // AppComponent,
        ResultsComponent,
        CardComponent,
        MockComponent(NavigationSidebarComponent),
        MockComponent(SyntheticDrawingComponent),
        MockComponent(StepbarComponent),
      ],
      providers: [
        ComputeLinkBudgetService,
        FormBuilder,
        { provide: ENVIRONMENT_TOKEN, useValue: mockEnvironment },
        { provide: FORM_TEMPLATE_TOKEN, useValue: FormsTemplate },
      ],
      imports: [
        // CommonModule,
        // FormsModule,
        HttpClientModule,
        ToastrTestingModule,
        FontAwesomeModule,
        // RouterTestingModule.withRoutes([
        //   { path: 'welcome', component: WelcomeComponent },
        //   { path: 'link-budget', component: LayoutComponent },
        //   { path: '', redirectTo: 'link-budget', pathMatch: 'full' },
        //   { path: 'results', component: ResultsComponent },
        // ]),
        NoopAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    TestBed.createComponent(MockAppComponent);
    computeService = TestBed.inject(ComputeLinkBudgetService);
    // component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // Here we're using (done) in order to only end integration test when we checked everything in order to avoid race conditions
  it('should compute and display the correct result in a reasonable amount of time', (done) => {
    let tables = fixture.debugElement.queryAll(By.css('.table'));
    expect(tables.length).toEqual(2); // Should have both up & down link
    let values = tables[0].queryAll(By.css('.result-value'));
    values.forEach((value) => {
      expect(parseFloat(value.nativeElement.innerText)).toEqual(0); // All values start at 0
    });

    const t0 = performance.now();
    // fixture.debugElement.query(By.css('.compute')).nativeElement.click();
    const obs = computeService.computeLinkBudget(mockPOSTData);
    // this.loading = true;
    obs?.subscribe(
      (value: any) => {
        computeService.updateResult(value);
        // console.warn("API response:");
        fixture.detectChanges();

        const t1 = performance.now();
        tables = fixture.debugElement.queryAll(By.css('.table'));
        values = tables[0].queryAll(By.css('.result-value'));
        // expect(parseFloat(values[0].nativeElement.innerText)).not.toEqual(0);
        let k = 0;
        values.forEach((elt) => {
          // console.log(elt.nativeElement.innerText);
          k += parseFloat(elt.nativeElement.innerText) !== 0 ? 1 : -1;
        });
        expect(k).toBeGreaterThan(4); // Some values are greater than zero at least
        // console.log(t1 - t0);
        expect(t1 - t0).toBeLessThan(500); // Request should be faster than 0.5 second

        done();
      },
      (error: { error: any }) => {
        throw new Error(`Some error while trying to contact API: ${error.error}`);
      }
    );
  });

  it('computed results should match the AMSAT ones (uplink)', (done) => {
    const expectedResults: { [key: string]: number } = {
      'Amplifier power': 10,
      // 'Circuit Loss': 9.5,
      // 'Antenna Gain': 14.0,
      EIRP: 19,
      'Slant Range': 2045000,
      FSL: 142,
      'Isotropic power received': -128.4,

      'Noise Temperature': 300, // linkpredict doesn't take into account the feed line coeff apparently so small diff with AMSAT here, still its value is 1 in AMSAT so a bit strange
      // 'Total Path Loss': 143.5,
      'G/T Figure of Merit': -22.6,
      'Noise Power Density': -203.8,
      'C/N0 ratio': 77.6,
      'Eb/N0 ratio': 46.8,
      'Eb/N0 margin': 23.6,
    };
    const obs = computeService.computeLinkBudget(mockPOSTData);
    obs?.subscribe(
      (value: any) => {
        computeService.updateResult(value);
        fixture.detectChanges();

        const tables = fixture.debugElement.queryAll(By.css('.table'));
        const uplinkValues = tables[0].queryAll(By.css('.result-row'));
        let checkedValues = 0;
        uplinkValues.forEach((elt) => {
          const label = elt.children[0].nativeElement.innerText;
          const val = parseFloat(
            elt.children[1].nativeElement.innerText
              .trim()
              .replace(/,/g, '') // Replace all commas between thousands
              .split(' ')[0]
          );
          // console.log(label);
          // console.log(val);
          if (expectedResults[label]) {
            checkedValues += 1;
            expect(expectedResults[label]).toBeCloseTo(val, 0);
          }
        });
        // Let's make sure we compared to all reference values
        expect(checkedValues).toEqual(Object.keys(expectedResults).length);
        done();
      },
      (error: { error: any }) => {
        throw new Error(`Some error while trying to contact API: ${error.error}`);
      }
    );
  });

  it('computed results should match the AMSAT ones (downlink)', (done) => {
    const expectedResults: { [key: string]: number } = {
      'Amplifier power': 10,
      // 'Circuit Loss': 9.5,
      // 'Antenna Gain': 14.0,
      EIRP: 19,
      'Slant Range': 2045000,
      FSL: 142,
      'Isotropic power received': -128.4,

      'Noise Temperature': 300, // linkpredict doesn't take into account the feed line coeff apparently so small diff with AMSAT here, still its value is 1 in AMSAT so a bit strange
      // 'Total Path Loss': 143.5,
      'G/T Figure of Merit': -22.6,
      'Noise Power Density': -203.8,
      'C/N0 ratio': 77.6,
      'Eb/N0 ratio': 46.8,
      'Eb/N0 margin': 23.6,
    };
    const obs = computeService.computeLinkBudget(mockPOSTData);
    obs?.subscribe(
      (value: any) => {
        computeService.updateResult(value);
        fixture.detectChanges();

        const tables = fixture.debugElement.queryAll(By.css('.table'));
        const uplinkValues = tables[0].queryAll(By.css('.result-row'));
        let checkedValues = 0;
        uplinkValues.forEach((elt) => {
          const label = elt.children[0].nativeElement.innerText;
          const val = parseFloat(
            elt.children[1].nativeElement.innerText
              .trim()
              .replace(/,/g, '') // Replace all commas between thousands
              .split(' ')[0]
          );
          // console.log(label);
          // console.log(val);
          if (expectedResults[label]) {
            checkedValues += 1;
            expect(expectedResults[label]).toBeCloseTo(val, 0);
          }
        });
        // Let's make sure we compared to all reference values
        expect(checkedValues).toEqual(Object.keys(expectedResults).length);
        done();
      },
      (error: { error: any }) => {
        throw new Error(`Some error while trying to contact API: ${error.error}`);
      }
    );
  });
});
