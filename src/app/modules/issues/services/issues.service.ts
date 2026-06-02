import { Injectable, signal } from '@angular/core';
import { getIssues, getLabels } from '../actions';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { State } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  selectState = signal<State>(State.All);
  selectLabels = signal(new Set<string>());

  labelsQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: () => getLabels()
  }));

  issuesQuery = injectQuery(() => ({
    queryKey: ['issues', {
      state: this.selectState(),
      selectLabels: [...this.selectLabels()]
    }],
    queryFn: () => getIssues( this.selectState(), [...this.selectLabels()] ),
  }));

  showIssuesByState( state: State ){
    this.selectState.set( state );
  }

  toggleLabel( label: string){
    const labels = this.selectLabels();

    if ( labels.has(label) ) {
      labels.delete(label);
    } else {
      labels.add(label);
    }
    this.selectLabels.set(new Set(labels));
  }
}
