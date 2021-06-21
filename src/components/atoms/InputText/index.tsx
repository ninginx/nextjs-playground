import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputText: React.FC<Props> = ({ type = "text", ...props }) => {
  return <input {...props} type={type} />;
};
