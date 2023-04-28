import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preconnect'
          href='../styles/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf'
        />
        <link
          rel='preconnect'
          href='../styles/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
