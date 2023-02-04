import Head from "next/head"
import Heading from "@/components/Heading"
import loadGames from "@/processes/gamesCards"

const RolePlays = () => {
    <>
        <Head>
            <title>Ролевки</title>
        </Head>
        <Heading text="Ролевки" />
        <loadGames.render />
    </>
}

export default RolePlays