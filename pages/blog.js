import styles from '../styles/Projects.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useKBar } from 'kbar'


export default function Blog() {
  const { query } = useKBar();
  return (
    <div className={styles.container}>
    <Head>
    <title>Toby B / Blog</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="./icon.png" />
      <meta property="og:url" content="https://personal-sitev2.vercel.app" />
      <meta property="og:type" content="Personal website." />
      <meta
        property="og:title"
        content="Toby B." />
      <meta name="twitter:card" content="13 y/o full stack web dev & designer." />
      <meta
        property="og:description"
        content="13 y/o full stack web dev & designer." />
      <meta property="og:image" content={"../public/preview.svg"} />
    </Head>
    <body>

    <svg className={styles.cmdkbutton} onClick={() => query.toggle()} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path 
          fill="none" stroke="#000" strokeWidth="2" 
          d="M12,9 C9,9 6.83333333,9 5.5,9 C3.5,9 2,7.5 2,5.5 C2,3.5 3.5,2 5.5,2 C7.5,2 9,3.5 9,5.5 C9,6.83333333 9,9 9,12 C9,15 9,17.1666667 9,18.5 C9,20.5 7.5,22 5.5,22 C3.5,22 2,20.5 2,18.5 C2,16.5 3.5,15 5.5,15 C6.83333333,15 9,15 12,15 C15,15 17.1666667,15 18.5,15 C20.5,15 22,16.5 22,18.5 C22,20.5 20.5,22 18.5,22 C16.5,22 15,20.5 15,18.5 C15,17.1666667 15,15 15,12 L15,5.5 C15,3.5 16.5,2 18.5,2 C20.5,2 22,3.5 22,5.5 C22,7.5 20.5,9 18.5,9 L12,9 Z"/></svg>


    <h1 className={styles.title}>Blog.</h1>
    <h1 className={styles.subtitle}>My thoughts and feelings about everything tech.</h1>
    
</body>
</div>
    )
}

function githubRef() {
  window.open("https://github.com/itstobez?tab=repositories", "_blank");
}
