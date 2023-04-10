import Head from 'next/head';
import Layout from '../../components/layout';
import Alert from '../../components/alert';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>Dinosaurs are dead...</p>
      <Alert type="success">
        <h2>ここは、SUCCESSゾーン</h2>
        <p>成功！</p>
      </Alert>
      <Alert type="warn">
        <h2>ここは、WARNNINGゾーン</h2>
        <p>注意！</p>
      </Alert>
      <Alert type="error">
        <h2>ここは、ERRORゾーン</h2>
        <p>やばいと思うよ！！！</p>
      </Alert>
    </Layout>
  );
}
