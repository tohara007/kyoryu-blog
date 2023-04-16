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
        markdownコンテンツのメタデータやコンテンツの読込は、「gray-matter」ライブラリを利用する。
      </p>
      <p>
        markdownコンテンツのHTML文字列への変換は、「remark」および「remark-html」ライブラリを利用する。
      </p>
      <p>
        「__htmlプロパティ」を持つオブジェクトをHTMLコンテンツとして表示するには、「dangerouslySetInnerHTML」属性を利用する。
      </p>
    </Layout>
  );
}
