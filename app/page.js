import Banner from "./components/Banner";
import Container from "./components/Container";
import Header from "./components/Header";

export default function Home() {
  return (
    <Container>
      {/* ----Header part---- */}
      <Header />

      {/* ----Main part---- */}
      <main>
        <Banner />
      </main>
    </Container>
  );
}
