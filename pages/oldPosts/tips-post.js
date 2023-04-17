import Head from 'next/head';
import Layout from '../../components/layout';
import Link from 'next/link';

export default function tips() {
  return (
    <Layout>
      <Head>
        <title>Tips</title>
      </Head>
      <h2>Tips集</h2>
      <p>
        markdownコンテンツのメタデータやコンテンツの読込は、「gray-matter」ライブラリを利用する。
      </p>
      <p>
        markdownコンテンツのHTML文字列への変換は、「remark」および「remark-html」ライブラリを利用する。
      </p>
      <p>
        「__htmlプロパティ」を持つオブジェクトをHTMLコンテンツとして表示するには、「dangerouslySetInnerHTML」属性を利用する。
      </p>
      <p>カスタム404ページを用意する場合、「pages/404.js」を作成する。</p>
      <p>
        Vercelを使って、無料でアプリをデプロイ可能（
        <Link href="https://nextjs.org/learn/basics/deploying-nextjs-app/deploy">
          Vercelのデプロイ方法
        </Link>
        参照）。
      </p>
    </Layout>
  );
}
