import Head from "next/head"
import Heading from "@/components/Heading"
import loadGames from "@/processes/gamesCards"

const TableGames = () => {
    <>
        <Head>
            <title>Настолки</title>
        </Head>
        <Heading text="Настолки" />
        <loadGames.render />
    </>
}

export default TableGames