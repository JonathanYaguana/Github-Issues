import { sleep } from "@helpers/sleep";
import { GitHubIssues, State } from "../interfaces";
import { environment } from "environments/environment";


const BASE_URL = environment.baseURL;
const GITHUB_TOKEN = environment.token;

export const getIssues = async (
  state: State = State.All,
  selectLabels: string[],
): Promise<GitHubIssues[]> => {

  await sleep(1500);

  const params = new URLSearchParams();
  params.append('state', state);

  try {

    const resp = await fetch(`${BASE_URL}/issues?${params}`, {
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
