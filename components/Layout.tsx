import Head from "next/head";
import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Head>
                <title>Antonello</title>
            </Head>
            <div className=" w-full bg-[#242424]">
                <div className=' shadow-lg fixed w-full z-10 bg-[#242424]'>
                    <Navbar />
                </div>
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout