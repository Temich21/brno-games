import Head from "next/head"
import Heading from "@/components/Heading/Heading"
import LoadGames from "@/components/Cards/gamesCards"

const AllGames = () => (
    <>
        <Head>
            <meta property="og:title" content="All Games" />
            <title>Все игры</title>
        </Head>
        <Heading text="Все игры" />
        <LoadGames />
    </>
)


export default AllGames