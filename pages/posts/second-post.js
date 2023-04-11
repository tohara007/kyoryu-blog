import Head from 'next/head';
import Layout from '../../components/layout';

export default function SecondPost() {
  return (
    <Layout>
      <Head>
        <title>Static Generation with Data</title>
      </Head>
      <h2>データを使用した静的生成が可能！</h2>
      <p>
        事前に外部データ（DBや外部APIからのデータなど）を取得しないとHTMLをレンダリングできないケースが存在する。
      </p>
      <p>
        「getStaticProps」と呼ばれるasync関数をエクスポートしているため、Next.jsならデータを取得後に静的生成を行うことが可能。
      </p>
    </Layout>
  );
}
