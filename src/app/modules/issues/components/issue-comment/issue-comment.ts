import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { GitHubIssues } from '../../interfaces';


import { MarkdownModule } from 'ngx-markdown';


@Component({
  selector: 'issue-comment',
  imports: [MarkdownModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './issue-comment.html',
})
export class IssueComment {
  issue = input.required<GitHubIssues>();
}
