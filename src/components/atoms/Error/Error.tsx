import React from "react";

type Props = {
  statusCode: number;
  title?: string;
};

export const Error = ({ statusCode, title }: Props) => {
  return (
    <div>
      <h1>{statusCode}</h1>
      <p>{title}</p>
    </div>
  );
};
