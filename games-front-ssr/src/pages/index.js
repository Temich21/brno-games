import Head from "next/head"
import Heading from "@/components/Heading/Heading"
import News from "@/components/Cards/newsCards"
import { backendUrl } from "@/constants"

const Home = ({ news }) => (
  <>
    <Head>
      <meta property="og:title" content="Homepage" />
      <title>Главная</title>
    </Head>
    <Heading text="Главная" />
    <News news={news} />
  </>
);

Home.getInitialProps = async (ctx) => {
  const data = await fetch(
    `${backendUrl}/api/news?populate=*&sort[0]=publishedAt:desc`
  );
  const news = await data.json()

  return { news }
}

export default Home
