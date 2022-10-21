import Head from "next/head";
import Area from "@orgasmo/orgasmo/Area";

export default function PlanetsLayout() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Area name="header" />
        <div className="grid">
          <div className="planets">
            <Area name="main" />
          </div>
        </div>
      </main>

      <footer className="footer">
        <Area name="footer" />
      </footer>
    </div>
  );
}
