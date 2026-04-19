import { Injectable, signal } from "@angular/core";
import { injectQuery } from "@tanstack/angular-query-experimental";
import { getIssueByNumber, getIssueComments } from "../actions";

@Injectable({
  providedIn: "root",
})
export class IssueService {

  private issueNumber = signal<string|null>(null);

  issueQuery = injectQuery(() => ({
    queryKey: ['issues', this.issueNumber() ],
    queryFn: () => getIssueByNumber( this.issueNumber()! ),
    enabled: this.issueNumber() !== null,
  }));

  issueCommentsQuery = injectQuery(() => ({
    queryKey: ['issues', this.issueNumber(), 'comments' ],
    queryFn: () => getIssueComments( this.issueNumber()! ),
    enabled: this.issueNumber() !== null,
  }));


  setIssueNumber = ( issueId: string ) => {
    this.issueNumber.set( issueId );
  }
}
