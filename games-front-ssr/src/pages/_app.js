import Head from "next/head"
import Layout from '@/components/Layout'
import '@/styles/globals.css'

const App = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
      <meta name="description" content="game schedule" />
      <meta name="language" content="russian" />
      <meta name="rating" content="safe for kids" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="..." />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
)


export default App