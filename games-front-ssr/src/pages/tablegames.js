import Head from "next/head"
import Heading from "@/components/Heading/Heading"
import LoadGames from "@/components/Cards/gamesCards"

const TableGames = () => (
    <>
        <Head>
            <meta property="og:title" content="Table games" />
            <title>Настолки</title>
        </Head>
        <Heading text="Настолки" />
        <LoadGames category={'Настолки'} />
    </>
)

export default TableGames