import { octokit } from "@/utils/fetcher";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = (props: any) => {
  if (!props.repos.data) return <div>error!</div>;
  console.log(props.repos.data);
  return <div>Hello Next.js</div>;
};

export const getStaticProps = async () => {
  const repos = await octokit.request("GET /users/ninginx/repos", {
    username: "ninginx",
  });
  return { props: { repos } };
};

export default Home;
