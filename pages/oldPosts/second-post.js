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
      <p>
        「getStaticProps」は、ページからのみexport可能。ページ以外のファイルからexportはできない。
      </p>
      <p>
        ビルド時にのみ1回だけ実行されることを想定されているため、クエリパラメーターや
        HTTPヘッダーなど、リクエスト時にのみ利用可能なデータを使用することはできない。
      </p>
      <p>また、頻繁に更新されるDBや外部APIのデータを映することもできない。</p>
      <p>
        頻繁に更新されるデータやユーザーリクエストごとに変更されるデータに対しては、「Server-side
        Rendering」を使用すべき。
      </p>
    </Layout>
  );
}
