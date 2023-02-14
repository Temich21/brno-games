import Head from "next/head"
import Heading from "@/components/Heading/Heading"
import Games from "@/components/Cards/gamesCards"
import { backendUrl } from "@/constants"

const DnD = ({ games }) => (
    <>
        <Head>
            <meta property="og:title" content="D&D" />
            <title>D&D</title>
        </Head>
        <Heading text="D&D" />
        <Games games={games} />
    </>
)

DnD.getInitialProps = async (ctx) => {
    const category = 'D&D'
    const url = `${backendUrl}/api/games?populate=*&sort[0]=publishedAt:desc`
    const query = `${url}&${`filters[game_type][GameTypeName][$eq]=${encodeURIComponent(
        category)}`}`
    const data = await fetch(query)
    const games = await data.json();

    return { games }
}

export default DnD