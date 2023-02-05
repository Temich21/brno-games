import Head from "next/head"
import Heading from "@/components/Heading"
import loadGames from "@/processes/gamesCards"

const TRPG = () => {
    <>
        <Head>
            <title>НРИ</title>
        </Head>
        <Heading text="НРИ" />
        <loadGames.render />
    </>
}

export default TRPG