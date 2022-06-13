import Link from "next/link";

import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <nav>
        <div className="nav-item">nav 1</div>
        <div className="nav-item">nav 2</div>
        <div className="nav-item">nav 3</div>
        <div className="nav-item">nav 4</div>
      </nav>
      <Head>
        <title>WNDW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="header-container">
        <h1>WNDW </h1>
      </div>
      <main>
        <section>
          <p className="description">
            Designed to take the pain out of presenting your ultrawide monitor
          </p>
          <button>Download</button>
        </section>
        <section>
          <div id="example-holder">example image</div>
          <div id="example-text-holder">
            <div id="example-arrow">example arrow</div>
            <div id="example-text"> example text</div>
          </div>
        </section>
        <section>
          <h3>See it in action</h3>
          <video></video>
        </section>
        <section>
          <div className="testimonial">
            <div className="testimonial-text">test 1</div>
            <div className="testimonial-name">name 1</div>
          </div>
          <div className="testimonial">
            <div className="testimonial-text">test 2</div>
            <div className="testimonial-name">name 2</div>
          </div>
          <div className="testimonial">
            <div className="testimonial-text">test 3</div>
            <div className="testimonial-name">name 3</div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
        }
        nav {
          display: block;
          margin: auto;
          width: 100%;
          max-width: 1050px;
          text-align: right;
        }
        .nav-item {
          display: inline-block;
          padding: 1.5rem 1rem;
        }

        #header-container {
          max-width: 1200px;
          width: 100%;
          display: block;
          margin: 0 auto;
          padding-top: 100px;
        }

        h1 {
          background: linear-gradient(136.64deg, #1144f9 5.27%, #11f997 50.92%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: black;
          font-size: 16rem;
          margin-top: 0px;
          margin-bottom: 0px;
          line-height: 0.8;
          font-weight: 500;
          letter-spacing: -0.09em;
        }

        main {
          display: block;
          margin: auto;
          width: 100%;
          max-width: 1100px;
        }
        p {
          font-size: 1.5rem;
        }
        .description {
          width: 60%;
        }
        button {
          padding: 1rem 4rem;
          background: linear-gradient(136.64deg, #1144f9 5.27%, #11f997 95.92%);
          font-size: 1.1rem;
          font-weight: 400;
          color: white;
          border: none;
          -webkit-appearance: button;
        }
        button:hover {
          cursor: pointer;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        @import url("https://rsms.me/inter/inter.css");

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Inter", sans-serif;
          background-color: #1e1e1e;
          color: white;
          overflow-x: hidden;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
