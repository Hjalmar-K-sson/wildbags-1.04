import "../node_modules/reset-css/sass/_reset.scss";
import "../styles/globals.scss";

import Layout from "../components/Layout";

import type { AppProps } from "next/app";

import { Amatic_SC } from "@next/font/google";

const amatic = Amatic_SC({ weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${amatic.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
