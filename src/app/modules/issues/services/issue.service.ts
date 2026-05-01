import { inject, Injectable, signal } from "@angular/core";
import { injectQuery, QueryClient } from "@tanstack/angular-query-experimental";
import { getIssueByNumber, getIssueComments } from "../actions";
import { GitHubIssues } from "../interfaces";

@Injectable({
  providedIn: "root",
})
export class IssueService {

  private issueNumber = signal<string|null>(null);
  private queryClient = inject(QueryClient);

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

  prefechIssue ( issuesId: string ){
    this.queryClient.prefetchQuery({
      queryKey: ['issue', issuesId],
      queryFn: () => getIssueByNumber(issuesId),
      staleTime: 1000 * 60 * 5,
    })
  }

  setIssueData( issue: GitHubIssues ){
    this.queryClient.setQueryData(
      ['issue', issue.number.toString()], issue, {
        updatedAt: new Date().getTime() + (1000 * 60 * 5)
      }
    )
  }
}
