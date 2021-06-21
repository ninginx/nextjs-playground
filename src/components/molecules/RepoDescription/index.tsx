import type { Endpoints } from "@octokit/types";

type Props = {
  repo: Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];
};

export const RepoDescription = ({ repo }: Props) => {
  return (
    <div>
      <h1>
        <a href={repo.html_url} target="_blank">
          {repo.name}
        </a>
      </h1>
      <div>
        <h2>*.{repo.stargazers_count}</h2>
        <p>{repo.description}</p>
      </div>
    </div>
  );
};
