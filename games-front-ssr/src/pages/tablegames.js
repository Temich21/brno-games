import Head from "next/head"
import Heading from "@/components/Heading/Heading"
import Games from "@/components/Cards/gamesCards"
import { backendUrl } from "@/constants"

const TableGames = ({ games }) => (
    <>
        <Head>
            <meta property="og:title" content="Table games" />
            <title>Настолки</title>
        </Head>
        <Heading text="Настолки" />
        <Games games={games} />
    </>
)

TableGames.getInitialProps = async (ctx) => {
    const category = 'Настолки'
    const url = `${backendUrl}/api/games?populate=*&sort[0]=publishedAt:desc`
    const query = `${url}&${`filters[game_type][GameTypeName][$eq]=${encodeURIComponent(
        category)}`}`
    const data = await fetch(query)
    const games = await data.json()

    return { games }
};

export default TableGames