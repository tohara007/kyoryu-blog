import Head from 'next/head';
import Layout from '../../components/layout';

export default function tips() {
  return (
    <Layout>
      <Head>
        <title>Tips</title>
      </Head>
      <h2>Tips集</h2>
      <p>
        markdownコンテンツは、「remark」および「remark-html」ライブラリを利用する。
      </p>
    </Layout>
  );
}
