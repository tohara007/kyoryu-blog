import Head from 'next/head';
import Layout from '../../components/layout';

export default function ThirdPost() {
  return (
    <Layout>
      <Head>
        <title>getServerSideProps</title>
      </Head>
      <h2>リクエストに応じたデータを使用したSSR！</h2>
      <p>
        Server-side
        Rendering（SSR）を使用するには、getStaticPropの代わりに、「getServerSideProps」
        async関数をページからエクスポートする必要がある。
      </p>
      <p>
        「getServerSideProps」はリクエスト時に呼び出されるため、その際の実行パラメータ（引数）にはリクエスト固有のパラメータが含まれる。
      </p>
    </Layout>
  );
}
