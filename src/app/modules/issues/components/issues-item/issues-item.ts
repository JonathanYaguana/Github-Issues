import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { GitHubIssues, State } from '../../interfaces';

@Component({
  selector: 'issues-item',
  imports: [RouterLink, CommonModule],
  templateUrl: './issues-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuesItem {
  issue = input.required<GitHubIssues>();

  get isOpen() {
    return this.issue().state === State.Open;
  }
 }
