import Head from 'next/head';
import Layout from '../../components/layout';
import Alert from '../../components/alert';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Static Generation or SSR</title>
      </Head>
      <h2>Static Generation（静的生成）</h2>
      <p>
        CDNで提供可能かつ高速かつSEO対策にもなるため、基本的には静的生成を選択すべし。
      </p>
      <p>
        ビルド時にHTMLを生成する事前レンダリング方式。その後、事前レンダリングされたHTMLが各リクエストで再利用される。
      </p>
      <p>
        このコンテンツは、事前生成可能か？を自問自答し、OKなら静的生成を選択する。
      </p>
      <h2>Server-side Rendering（SSR）</h2>
      <p>
        ユーザのリクエスト毎に異なるページを表示する必要がある場合、SSRを選択すべし。
      </p>
      <p>
        リクエストに対して、都度ページをサーバ側で生成し、最新のページ状態をユーザに提供できる。
      </p>
      <Alert type="success">
        <p>成功！</p>
      </Alert>
      <Alert type="warn">
        <p>注意！</p>
      </Alert>
      <Alert type="error">
        <p>やばいと思うよ！！！</p>
      </Alert>
    </Layout>
  );
}
