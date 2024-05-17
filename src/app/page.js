import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello next js. My name is Jack</h1>
      <Link href={'/products'}>Go to products Page</Link>
    </main>
  );
}
