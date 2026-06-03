import { Component, inject } from '@angular/core';
import { IssuesService } from '../../services/issues.service';

import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector-component';
import { IssuesItem } from '../../components/issues-item/issues-item';
import { State } from '../../interfaces';



@Component({
  selector: 'app-issues-list-page',
  imports: [LabelsSelectorComponent, IssuesItem],
  templateUrl: './issues-list-page.component.html',
})
export default class IssuesListPageComponent {
  issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }

  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }

  onChangeState(newState: string) {
    const state = {
      'all': State.All,
      'open': State.Open,
      'closed': State.Closed,
    }[newState] ?? State.All;

  this.issuesService.showIssuesByState(state);

  }

 }
