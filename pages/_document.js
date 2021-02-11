import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    return { ...page }
  }

  render () {
    return (
      <Html lang='es'>
        <Head>
          <meta property='og:type' content='website' />
          <meta name='og:title' property='og:title' content='' />
          <meta name='og:description' property='og:description' content='' />
          <link rel='icon' type='image/png' href='favicon.png' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <link rel='stylesheet' type='text/css' href='/styles/normalize.css' />
          <link rel='stylesheet' type='text/css' href='/styles/global.css' />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
