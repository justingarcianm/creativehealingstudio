import Head from "next/head";

import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Creative Healing Studio</title>
      </Head>
      <main className="m-0 h-100 flex flx-col gap-6">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
