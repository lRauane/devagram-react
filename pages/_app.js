import "../styles/global.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Devagram</title>
        <link rel='icon' href='./public/Imagens/logo.svg' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
