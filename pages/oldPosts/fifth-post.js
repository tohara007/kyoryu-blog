import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FifthPost() {
  return (
    <Layout>
      <Head>
        <title>API Routes</title>
      </Head>
      <h2>APIルート</h2>
      <p>
        APIルートを使用すると、 Next.jsアプリ内にAPIエンドポイントを作成できる。
      </p>
      <p>
        これらは、サーバーレス関数 (Lambda とも呼ばれる) としてデプロイ可能。
      </p>
      <p>
        APIルートも、通常のページと同様に動的にすることが可能（
        <Link href="https://nextjs.org/docs/api-routes/dynamic-api-routes">
          動的APIルートのドキュメント
        </Link>
        参照）。
      </p>
      <h3>作成手順</h3>
      <p>
        「pages/api」ディレクトリ直下に、「hello.js」のようなAPIエンドポイント用ファイルを作成する。
      </p>
      <h3>使用例</h3>
      <h4>フォーム入力の処理</h4>
      <p>APIルートの優れたユースケースは、フォーム入力の処理である。</p>
      <p>
        ページ上にフォームを作成し、APIルートにPOSTリクエストを送信させることができる。そして、それを直接データベースに保存するコードを書くことができる。
      </p>
      <p>
        APIルートのコードはクライアントバンドルに含まれないので、安全にサーバーサイドのコードを書くことができる。
      </p>
      <h3>注意事項</h3>
      <p>
        「getStaticProps」や「getStaticPaths」からAPIルートを取得するべきではない。代わりに、サーバーサイドのコードを「getStaticProps」または「getStaticPaths」に直接記述する（またはヘルパー関数を呼び出す）。
      </p>
      <p>
        理由として、（1）「getStaticProps」や「getStaticPaths」はクライアントバンドルには含まれないため、ブラウザに送信されることなく直接サーバサイドのコードを実行できること（2）「getStaticProps」または「getStaticPaths」からAPIルートを呼び出すことで、パフォーマンスが低下すること（APIルートを使用せずにできることのため）が挙げられる。
      </p>
    </Layout>
  );
}
