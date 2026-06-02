import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { NgStyle } from '@angular/common';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'issues-labels-selector',
  imports: [NgStyle],
  templateUrl: './labels-selector-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelsSelectorComponent {

  labels = input.required<GitHubLabel[]>();
  issuesService = inject(IssuesService);

  isSelected(labelName: string){
    return this.issuesService.selectLabels().has(labelName);
  }

  onToggleLabel( labelName: string ){
    this.issuesService.toggleLabel(labelName);
  }
}
