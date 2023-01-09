import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wildbags</title>
        <meta name="description" content="Placeholder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-page">
        <h1>WILDBAGS</h1>
      </div>
    </>
  );
}
