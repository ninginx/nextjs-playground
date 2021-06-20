import { UserDescription } from "@/components/molecules/UserDescription";
import { UserRepos } from "@/components/molecules/UserRepos";
import type { Endpoints } from "@octokit/types";

type Props = {
  user: Endpoints["GET /users/{username}"]["response"]["data"];
  repos: Endpoints["GET /users/{username}/repos"]["response"]["data"];
};

export const Template = ({ user, repos }: Props) => {
  return (
    <div>
      <section>
        <UserDescription user={user} />
      </section>
      <section>
        <UserRepos username={user.login} repos={repos} />
      </section>
    </div>
  );
};
