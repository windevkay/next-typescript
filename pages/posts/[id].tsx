import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";

import { PostComponent } from "../../components";
import { PostData } from "../../types";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: { id: "binary-search" },
    },
    {
      params: { id: "linked-list" },
    },
  ];
  return {
    paths,
    fallback: false,
  };
};

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

export const getStaticProps: GetStaticProps<PostData> = async ({ params }) => {
  const post = allPostsData.find((post) => post.id === params!.id);
  if (post === undefined) throw new Error("post not found");
  const postData = post;
  return {
    props: {
      postData,
    },
  };
};

const Post = ({ postData }: PostData) => {
  return (
    <>
      <Head>
        <title>{postData.id}</title>
      </Head>
      <PostComponent postData={postData} />
    </>
  );
};

export default Post;
