import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'issues-labels-selector',
  imports: [NgStyle],
  templateUrl: './labels-selector-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelsSelectorComponent {
  labels = input.required<GitHubLabel[]>();
 }
