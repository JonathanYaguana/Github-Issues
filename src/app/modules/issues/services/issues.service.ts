import { Injectable, signal } from '@angular/core';
import { getIssues, getLabels } from '../actions';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { State } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  selectState = signal<State>(State.All);

  labelsQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: () => getLabels()
  }));

  issuesQuery = injectQuery(() => ({
    queryKey: ['issues', this.selectState()],
    queryFn: () => getIssues( this.selectState() ),
  }));

  showIssuesByState( state: State ){
    this.selectState.set( state );
  }
}
