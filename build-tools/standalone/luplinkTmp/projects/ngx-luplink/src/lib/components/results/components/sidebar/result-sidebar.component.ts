import { Component } from '@angular/core';
import ComputeLinkBudgetService from '../../../../services/compute-link-budget.service';

@Component({
  selector: 'lib-result-sidebar',
  templateUrl: './result-sidebar.component.html',
  styleUrls: ['./result-sidebar.component.scss'],
})
export class ResultSidebarComponent {
  constructor(public computeLinkBudget: ComputeLinkBudgetService) { }
}
