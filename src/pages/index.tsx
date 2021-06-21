import React from "react";
import { Template } from "@/components/templates/";

const Home = (props: any) => {
  if (!props.repos.data) return <div>error!</div>;
  console.log(props.repos.data);
  return <div>Hello Next.js</div>;
};

const Page = () => {
  return <Template />;
};

export default Page;
