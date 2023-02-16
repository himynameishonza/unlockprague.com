import { Html, Main, NextScript, Head } from 'next/document'

export default function Document() {
  return (
    <Html className="antialiased" lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
