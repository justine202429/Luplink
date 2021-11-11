import { Routes } from '@angular/router';
import { ResultsComponent } from '../components/results/components/results/results.component';
import { SynthesisComponent } from '../components/synthesis/synthesis.component';
import { SynthesisModule } from '../components/synthesis/synthesis.module';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { LayoutComponent } from './link-budget/layout.component';

// https://github.com/wesleygrimes/angular-routing-best-practices
export const routes: Routes = [
  {
    path: 'luplink',
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: '', component: LayoutComponent },
      { path: 'diagram', component: SynthesisComponent },
      { path: 'results', component: ResultsComponent },
    ],
  },
  { path: '', redirectTo: 'luplink', pathMatch: 'full' },

];
