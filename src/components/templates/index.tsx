import Router from "next/router";
import React from "react";

import { Button } from "@/components/atoms/Button";
import { InputText } from "@/components/atoms/InputText";

export const Template = () => {
  const [name, setName] = React.useState("");
  return (
    <div>
      <h1>Next.js × Github API</h1>
      <p>Enter the user account name you want to look up.</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          Router.push(`/users/${name}`);
        }}
      >
        <p>
          <InputText
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </p>
        <p>
          <Button type="submit">Search User</Button>
        </p>
      </form>
    </div>
  );
};
