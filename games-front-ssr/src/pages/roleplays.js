import Head from "next/head"
import Heading from "@/components/Heading/Heading"
import LoadGames from "@/components/Cards/gamesCards"

const RolePlays = () => (
    <>
        <Head>
            <meta property="og:title" content="Roleplays" />
            <title>Ролевки</title>
        </Head>
        <Heading text="Ролевки" />
        <LoadGames category={'Ролевки'} />
    </>
)

export default RolePlays