import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <title>Terapie Žídek</title>
        <meta
          name="description"
          content="Nabízím Vám odbornou pomoc a podporu při zvládání Vašich osobních
          obtíží. Mám za sebou přes deset let psychoterapeutické a
          poradenské praxe."
        />
        <meta name="og:title" content="Terapie Žídek" />
        <meta
          name="og:description"
          content="Nabízím Vám odbornou pomoc a podporu při zvládání Vašich osobních
          obtíží. Mám za sebou přes deset let psychoterapeutické a
          poradenské praxe."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        {/* <meta property="og:url" content="https://himynameishonza.com" /> */}
        <meta property="og:site_name" content="himynameishonza.com" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="pinterest" content="nopin" />
        <meta
          name="twitter:description"
          content="Nabízím Vám odbornou pomoc a podporu při zvládání Vašich osobních
          obtíží. Mám za sebou přes deset let psychoterapeutické a
          poradenské praxe."
        />
        <meta name="twitter:title" content="Terapie Žídek" />
        <meta name="twitter:image" content="/og-image.jpg" />
        {/* <meta name="twitter:site" content="@himynameishonza" />
        <meta name="twitter:creator" content="@himynameishonza" /> */}
        {/* <link rel="canonical" href="http://t.com/" /> */}
        {/* <meta name="robots" content="index, follow" /> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#4f46e5"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="overflow-x-hidden bg-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
