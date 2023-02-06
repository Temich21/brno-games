import Head from "next/head"
import Heading from "@/components/Heading/Heading"
import LoadGames from "@/components/Cards/gamesCards"

const DnD = () => (
    <>
        <Head>
            <meta property="og:title" content="D&D" />
            <title>D&D</title>
        </Head>
        <Heading text="D&D" />
        <LoadGames category={'D&D'} />
    </>
)

export default DnD