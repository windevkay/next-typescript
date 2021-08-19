import { Layout } from "../Layout";
import { PostData } from "../../types";

import utilStyles from "../../styles/utils.module.css";

export const PostComponent = ({ postData }: PostData) => {
  return (
    <Layout home={false}>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>

        <div className={utilStyles.lightText}>{postData.id}</div>

        <div>{postData.date}</div>
      </article>
    </Layout>
  );
};
