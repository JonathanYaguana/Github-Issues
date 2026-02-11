import { Injectable } from '@angular/core';
import { getLabels } from '../actions';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  labelQuery = injectQuery(() => ({
    queryKey: ['todos'],
    queryFn: () => getLabels()
  }));

}
