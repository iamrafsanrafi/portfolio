import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      {/* ----Header part---- */}
      <Header />

      {/* ----Main part---- */}
      <main>
        <Banner />
        <AboutMe />
      </main>
    </>
  );
}
