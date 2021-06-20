import { signIn } from "next-auth/client";
import { Button } from "@/components/atoms/Button";

const RequiredLogin = () => {
  return (
    <div>
      <h1>Unauthorized</h1>
      <p>
        This Contents needs your github permissions
        <br />
        please sign in
      </p>
      <Button onClick={() => signIn()}>Sign in with Github</Button>
    </div>
  );
};

export default RequiredLogin;
