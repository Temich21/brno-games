import Head from "next/head"
import Heading from "@/components/Heading/Heading"
import LoadGames from "@/components/Cards/gamesCards"

const TRPG = () => (
    <>
        <Head>
            <meta property="og:title" content="TRPG" />
            <title>НРИ</title>
        </Head>
        <Heading text="НРИ" />
        <LoadGames category={'НРИ'} />
    </>
)

export default TRPG