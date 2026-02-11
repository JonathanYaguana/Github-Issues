import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { IssuesService } from '../../services/issues.service';
import { CommonModule } from '@angular/common';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector-component';

@Component({
  selector: 'app-issues-list-page',
  imports: [RouterLink, CommonModule, LabelsSelectorComponent],
  templateUrl: './issues-list-page.component.html',
})
export default class IssuesListPageComponent {
  issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelQuery;
  }
 }
