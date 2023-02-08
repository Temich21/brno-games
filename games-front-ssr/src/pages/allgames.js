import Head from "next/head"
import Heading from "@/components/Heading/Heading"
import Games from "@/components/Cards/gamesCards"
import { backendUrl } from "@/constants"

const AllGames = ({ games }) => (
    <>
        <Head>
            <meta property="og:title" content="All Games" />
            <title>Все игры</title>
        </Head>
        <Heading text="Все игры" />
        <Games games={games} />
    </>
)

AllGames.getInitialProps = async (ctx) => {
    const data = await fetch(
        `${backendUrl}/api/games?populate=*&sort[0]=publishedAt:desc`
    )
    const games = await data.json()

    return { games }
}

export default AllGames