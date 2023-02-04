import Head from "next/head"
import Heading from "@/components/Heading"
import loadGames from "@/processes/gamesCards"

const AllGames = () => {
    <>
        <Head>
            <title>Все игры</title>
        </Head>
        <Heading text="Все игры" />
        <loadGames.render />
    </>
}

export default AllGames