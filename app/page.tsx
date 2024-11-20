import Header from "@/components/header/Header";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <h1>olá home</h1>
      <Footer />
    </div>
  );
}
