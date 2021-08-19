import type { GetStaticProps } from "next";
import Head from "next/head";

import { HomeComponent, siteTitle } from "../components";

import { BlogProps } from "../types";

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const allPostsData = [
    {
      id: "binary-search",
      date: "01-02-12",
      title: "Binary search tree article",
    },
    {
      id: "linked-list",
      date: "05-02-12",
      title: "Linked list publication",
    },
  ];
  return {
    props: {
      allPostsData,
    },
  };
};

const Home = ({ allPostsData }: BlogProps) => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomeComponent allPostsData={allPostsData} />
    </>
  );
};

export default Home;
