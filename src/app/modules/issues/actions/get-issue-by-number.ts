import { sleep } from "@helpers/sleep";
import { GitHubIssues } from "../interfaces";
import { environment } from "environments/environment.development";


const BASE_URL = environment.baseURL;
const GITHUB_TOKEN = environment.token;

export const getIssueByNumber = async ( issueNumber: string ): Promise<GitHubIssues> => {

  await sleep(1500);

  try {

    const resp = await fetch(`${BASE_URL}/issues/${issueNumber}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      }
    });

    if (!resp.ok) throw "Can't load issue";

    const issue: GitHubIssues = await resp.json();

    console.log({issue});

    return issue;
  } catch (error) {
    throw "Can't load issue";
  }
};
