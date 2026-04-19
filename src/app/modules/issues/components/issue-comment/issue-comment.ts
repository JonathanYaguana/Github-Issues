import { Component, input } from '@angular/core';
import { GitHubIssues } from '../../interfaces';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';


@Component({
  selector: 'issue-comment',
  imports: [CommonModule, MarkdownModule],
  templateUrl: './issue-comment.html',
})
export class IssueComment {
  issue = input.required<GitHubIssues>();
}
