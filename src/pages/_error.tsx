import { Error } from "@/components/atoms/Error";
import { ErrorProps } from "next/error";

const AppError = ({ statusCode, title }: ErrorProps) => {
  if (statusCode === 401) {
    return <div>Required Login</div>;
  }
  return <Error statusCode={statusCode} title={title} />;
};

export default AppError;
