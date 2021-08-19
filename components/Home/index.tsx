import Link from "next/link";

import { Layout } from "../Layout";
import { BlogProps } from "../../types";

import utilStyles from "../../styles/utils.module.css";

export const HomeComponent = ({ allPostsData }: BlogProps) => {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData &&
            allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
};
