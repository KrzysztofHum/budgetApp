import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/main/Index";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
