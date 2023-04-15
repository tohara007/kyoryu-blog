import Head from 'next/head';
import Layout from '../../components/layout';

export default function FourthPost() {
  return (
    <Layout>
      <Head>
        <title>Dynamic Routes</title>
      </Head>
      <h2>動的ルート</h2>
      <p>
        外部データに依存するパスを持つページを静的に生成可能。これにより、動的URL（動的ルート）が有効になる（「posts/a」や「posts/b」など）。
      </p>
      <h3>作成手順</h3>
      <p>
        「pages/XX」直下に、「[id.js]」のような「[]」で囲まれたファイル名のファイルを作成する。
      </p>
      <p>「[]」で囲まれたファイル名のファイルは、Next.jsの動的ルートとなる。</p>
      <p>
        次に、このページから呼び出される非同期関数「getStaticPaths」をExportする。この関数は、「[param].js」の可能な値のリスト（param）を返す必要がある。
      </p>
      <p>
        最後に、getStaticPropsを実装する。「[param].js」で必要なデータを含むgetStaticPropsが与えられる。
      </p>
      <p>
        重要なことに、返却されるべきデータリストは単なる文字列の配列ではなく、オブジェクトの配列でなければならない。
      </p>
      <p>
        各オブジェクトにはparamsキーが必要であり、キーを持つオブジェクトが含まれている必要がある
        (ファイル名で[キー名]使用しているため)。
      </p>
      <p>この原則を守れないと、「getStaticPaths」関数実行に失敗する。</p>
    </Layout>
  );
}
