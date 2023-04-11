import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Kyoryu san</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2>Check my Posts!</h2>
        <div>
          <Link className={utilStyles.newPost} href="/posts/second-post">
            Second POST
          </Link>
        </div>
        <div>
          <Link href="/posts/first-post">First POST</Link>
        </div>
      </section>
    </Layout>
  );
}
