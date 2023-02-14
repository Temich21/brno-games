import Head from "next/head"
import Heading from "@/components/Heading/Heading"
import Games from "@/components/Cards/gamesCards"
import { backendUrl } from "@/constants"

const TRPG = ({ games }) => (
    <>
        <Head>
            <meta property="og:title" content="TRPG" />
            <title>НРИ</title>
        </Head>
        <Heading text="НРИ" />
        <Games games={games} />
    </>
)

TRPG.getInitialProps = async (ctx) => {
    const category = 'НРИ'
    const url = `${backendUrl}/api/games?populate=*&sort[0]=publishedAt:desc`
    const query = `${url}&${`filters[game_type][GameTypeName][$eq]=${encodeURIComponent(
        category)}`}`
    const data = await fetch(query)
    const games = await data.json();

    return { games }
};


export default TRPG