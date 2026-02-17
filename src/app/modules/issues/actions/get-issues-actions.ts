import { sleep } from "@helpers/sleep";
import { GitHubIssues } from "../interfaces";
import { environment } from "src/environments/environment.development";


const BASE_URL = environment.baseURL;
const GITHUB_TOKEN = environment.token;

export const getIssues = async (): Promise<GitHubIssues[]> => {

  await sleep(1500);

  try {
    const resp = await fetch(`${BASE_URL}/issues`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      }
    });

    if (!resp.ok) throw "Can't load issues";

    const issues: GitHubIssues[] = await resp.json();

    console.log({issues});

    return issues;
  } catch (error) {
    throw "Can't load issues";
  }
};
