import { Injectable } from '@angular/core';
import { getIssues, getLabels } from '../actions';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  labelsQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: () => getLabels()
  }));


  issuesQuery = injectQuery(() => ({
    queryKey: ['issues'],
    queryFn: () => getIssues()
  }));
}
