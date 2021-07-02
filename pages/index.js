import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import PagesToSearch from './components/without_selecction.js';
import PagesToCharge from './components/with_selecction.js';


export default function Home() {
  const { query } = useRouter();
  console.log("dato", query);
  return (
    <div className={styles.container}>
      <Head>
        <title>Links</title>
        <meta name="description" content="Redireccionador" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {(query.q!=undefined)?<PagesToCharge props={query.q}/>:<PagesToSearch/>}
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/logo_em.svg" alt="Esquinero Mexicano Logo" width={200} height={35} />
          </span>
        </a>
      </footer>
    </div>
  )
}