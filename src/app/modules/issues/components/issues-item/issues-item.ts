import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { GitHubIssues, State } from '../../interfaces';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'issues-item',
  imports: [RouterLink, CommonModule],
  templateUrl: './issues-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuesItem {
  issue = input.required<GitHubIssues>();
  IssueService = inject(IssueService);

  get isOpen() {
    return this.issue().state === State.Open;
  }

  prefetchData(){
    //this.IssueService.prefechIssue(this.issue().number.toString());
    this.IssueService.setIssueData( this.issue() );
  }
 }
