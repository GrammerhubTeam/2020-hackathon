import App from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
      console.log('------------', pageProps)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
            <title>Grammerhub | Level Up Your Coding Skills - Coming Soon</title>
            <link href="../static/css/normalize.css" rel="stylesheet"></link>
            <link href="../static/css/style.scss" rel="stylesheet"></link>
            
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}