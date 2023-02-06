import Head from "next/head"
import Heading from "@/components/Heading/Heading"
import LoadNews from "@/components/Cards/newsCards"

const Home = () => (
  <>
    <Head>
      <meta property="og:title" content="Homepage" />
      <title>Главная</title>
    </Head>
    <Heading text="Главная" />
    <LoadNews />
  </>
)

export default Home