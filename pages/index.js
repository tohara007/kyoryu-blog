import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';

import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

// データを取得後に、静的生成を行うための「getStaticProps」と呼ばれるasync関数を定義
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm an engineer</p>
      </section>
      <section>
        <h2>Check my Posts!</h2>
        <div>
          <Link className={utilStyles.newPost} href="/oldPosts/fifth-post">
            Fifth POST
          </Link>
        </div>
        <div>
          <Link href="/oldPosts/fourth-post">Fourth POST</Link>
        </div>
        <div>
          <Link href="/oldPosts/third-post">Third POST</Link>
        </div>
        <div>
          <Link href="/oldPosts/second-post">Second POST</Link>
        </div>
        <div>
          <Link href="/oldPosts/first-post">First POST</Link>
        </div>
        <div>
          <Link href="/oldPosts/tips-post">Tips</Link>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
