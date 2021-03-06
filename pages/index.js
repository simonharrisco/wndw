import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
// import { AiFillApple, AiFillWindows } from "react-icons/ai";
// import { ImWindows8 } from "react-icons/im";
export default function Home() {
  function handleClickNav(e, divstring) {
    e.preventDefault();
    document.querySelector(divstring).scrollIntoView({
      behavior: "smooth",
    });
  }
  function handleButtonClick(e) {
    e.preventDefault();
    window.location.href =
      "https://github.com/simonharrisco/WNDW.app/releases/tag/release";
  }
  return (
    <div className="container">
      <nav>
        <div className="nav-item none-test">
          <a href="/" onClick={(e) => handleClickNav(e, "#video-section")}>
            Demo
          </a>
        </div>
        <div className="nav-item none-test">
          <a href="/" onClick={(e) => handleClickNav(e, "#video-section")}>
            Testimonials
          </a>
        </div>
        <div className="nav-item">
          <a href="https://github.com/simonharrisco/WNDW.app">Github</a>
        </div>
        <div className="nav-item none-test">
          <a href="https://github.com/simonharrisco/WNDW.app/releases/tag/release">
            Download
          </a>
        </div>
      </nav>
      <Head>
        <title>WNDW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="header-container">
        <h1>WNDW </h1>
      </div>
      <main>
        <section id="subtitle-section">
          <p className="description">
            Designed to take the pain out of presenting your ultrawide monitor.
            Free {"&"} open source.
          </p>
          <button onClick={(e) => handleButtonClick(e)}>Download</button>
        </section>
        <section>
          <div id="example-holder">
            <div id="example-item">WNDW</div>
          </div>
          <div id="example-text-holder">
            <div id="example-arrow">
              <Image id="svg-arrow" src="/arrow.svg" height={100} width={100} />
            </div>
            <div id="example-text">
              Make Google Meet, Slack, Zoom and Discord simple. Using the 'share
              window' feature, with wndw you can show just part of your screen.
            </div>
          </div>
        </section>
        <section id="description-section">
          <h3>How it works</h3>
          <p>
            It works by showing a section of your desktop within a window, so
            you can share that section using the 'share window' feature in video
            calls.
          </p>
        </section>
        <section id="video-section">
          <video controls>
            <source src="/br.mov" type="video/mp4" />
          </video>
        </section>
        <section id="testimonial-title">
          <h3>Testimonials</h3>
        </section>
        <section id="testimonial-section">
          <div className="testimonial" id="t1">
            <div className="testimonial-text">
              {" "}
              I use it everyday and find it helpful tbh. I use it for showing my
              browser and code without all the clicking.
            </div>
            <div className="testimonial-name">Me</div>
          </div>
          <div className="testimonial" id="t2">
            <div className="testimonial-text">
              Thats very nice dear, I like the colors on the website.
            </div>
            <div className="testimonial-name">My Mum</div>
          </div>
          <div className="testimonial" id="t3">
            <div className="testimonial-text">
              Seriously, I think you should try it. I mean its free whats the
              worse that could happen?
            </div>
            <div className="testimonial-name">Also Me</div>
          </div>
        </section>
        <section id="clout-chasing">
          <h3 className="clout-footer">
            Made by{" "}
            <a href="https://twitter.com/SimonHarrisCo">@simonharrisco</a>{" "}
            <br />
            on <a href="https://twitter.com/SimonHarrisCo">Twitter</a> <br />
            {"& "} <a href="https://github.com/simonharrisco">Github</a>
            <br />
          </h3>
        </section>
      </main>

      <style jsx>{`
        a {
          color: inherit;
        }

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

        @media only screen and (max-width: 850px) {
          h1 {
            font-size: 6rem;
          }
        }

        #subtitle-section {
          margin-bottom: 100px;
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

        #example-holder {
          width: 300px;
          height: 240px;
          border: 1px solid black;
          display: block;
          margin-left: auto;
          overflow-x: scroll;
          overflow-y: hidden;
          margin-top: 30px;
        }

        #example-item {
          width: 810px;
          height: 300px;
          background: linear-gradient(136.64deg, #1144f9 5.27%, #11f997 50.92%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 15em;
          padding-top: 30px;
          line-height: 0.8;
        }

        #example-text-holder {
          width: 310px;
          height: 150px;
          margin-left: auto;
          margin-right: 350px;
          position: relative;
        }
        #example-text {
          position: absolute;
          top: 10px;
          left: 0;
          font-size: 1.1rem;
          line-height: 1.3;
        }

        #example-arrow {
          position: absolute;
          top: 0px;
          right: 0px;
          transform: translate(-30%, -120%);
        }
        #description-section {
          margin-top: 150px;
          margin-bottom: 0px;
          padding-top: 50px;
          padding-bottom: 10px;
          text-align: center;
          max-width: 600px;
          width: 100%;
          display: block;
          margin-left: auto;
          margin-right: auto;
          // background-color: #151515;
          border-radius: 10px;
        }
        #description-section h3 {
          margin-bottom: 0px;
        }

        #video-section {
          text-align: center;
          padding-bottom: 50px;
        }
        h3 {
          background: linear-gradient(136.64deg, #1144f9 5.27%, #11f997 50.92%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: black;
          font-size: 2rem;
          margin: auto;
          line-height: 0.8;
          font-weight: 500;
          display: inline-block;
          margin-bottom: 30px;
        }
        video {
          width: 100%;
        }
        #testimonial-section {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          margin-top: 30px;
          margin-bottom: 150px;
        }
        #testimonial-title {
          display: block;
          text-align: center;
          margin-top: 80px;
        }
        .testimonial {
          width: 300px;
          padding: 20px 20px;
          display: flex;
          flex-direction: column;
          justify-content: top;
          align-items: left;
        }

        .testimonial-text {
          font-size: 1.1rem;
          line-height: 1.3;
        }

        .testimonial-name {
          margin-top: 15px;
          font-size: 1.6rem;
          fotn-weight: 500;
          line-height: 1.3;
          background: linear-gradient(136.64deg, #1144f9 5.27%, #11f997 50.92%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: right;
        }
        #t2 {
          margin-top: 120px;
        }
        #t3 {
          margin-top: 240px;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .clout-footer {
          line-height: 1.3;
          padding-bottom: 100px;
        }

        .clout-footer > a {
          text-decoration: underline;
        }

        @media screen and (max-width: 600px) {
          .description {
            width: auto;
          }
          #example-arrow {
            display: none !important;
          }
          #example-text-holder {
            width: 100%;
          }
          #example-holder {
            margin-right: auto;
          }
          .none-test {
            display: none;
          }
        }

        @media screen and (max-width: 600px) {
          #testimonial-section {
            display: block !important;
          }
          .testimonial {
            display: block !important;
            width: 100%;
          }
          #t2 {
            margin-top: 40px;
          }
          #t3 {
            margin-top: 40px;
          }
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
