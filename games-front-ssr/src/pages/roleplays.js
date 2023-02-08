import Head from "next/head"
import Heading from "@/components/Heading/Heading"
import Games from "@/components/Cards/gamesCards"
import { backendUrl } from "@/constants"

const RolePlays = ({ games }) => (
    <>
        <Head>
            <meta property="og:title" content="Roleplays" />
            <title>Ролевки</title>
        </Head>
        <Heading text="Ролевки" />
        <Games games={games} />
    </>
)

RolePlays.getInitialProps = async (ctx) => {
    const category = 'Ролевки'
    const url = `${backendUrl}/api/games?populate=*&sort[0]=publishedAt:desc`
    const query = `${url}&${`filters[game_type][GameTypeName][$eq]=${encodeURIComponent(
        category)}`}`
    const data = await fetch(query)
    const games = await data.json();

    return { games }
};


export default RolePlays