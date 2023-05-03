import "../styles/global.css"
import Layout from "../components/layout"
import Head from "next/head"

export default function AppWrapper({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title></title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
