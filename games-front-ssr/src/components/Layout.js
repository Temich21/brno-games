import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import loadNews from "@/components/Cards/newsCards"

const Layout = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
)

export default Layout