import { sleep } from "@helpers/sleep";
import { GitHubLabel } from "../interfaces";
import { environment } from "src/environments/environment.development";


const BASE_URL = environment.baseURL;
const GITHUB_TOKEN = environment.token;

export const getLabels = async (): Promise<GitHubLabel[]> => {

  await sleep(1500);

  try {
    const resp = await fetch(`${BASE_URL}/labels`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      }
    });

    if (!resp.ok) throw "Can't load labels";

    const labels: GitHubLabel[] = await resp.json();

    console.log('Labels loaded:', labels);

    return labels;
  } catch (error) {
    throw "Can't load labels";
  }
};
