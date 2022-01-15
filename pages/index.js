import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import React, {useEffect} from "react";
import { useKBar } from 'kbar';
import { KbarPortal } from './_app.js';
import  MyApp  from "./_app.js";
import rotate from '../styles/Rotate.module.scss';
import cmdIcon from './_app'

export default function Home() {
const { query } = useKBar();
  return (
    <div className={styles.container}>
      <Head>
        <title>Toby B Development</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/peep (3).png" />
        <meta property="og:url" content="https://personal-sitev2.vercel.app" />
        <meta property="og:type" content="Personal website." />
        <meta
          property="og:title"
          content="Toby B."
        />
        <meta name="twitter:card" content="13 y/o full stack web dev & designer." />
        <meta
          property="og:description"
          content="13 y/o full stack web dev & designer."
        />
        <meta property="og:image" content={"./banner.png"} />
      </Head>
      <body>
      <ChakraProvider>
        <cmdIcon>

        <svg className={styles.cmdkbutton} onClick={() => query.toggle()} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path 
        fill="none" stroke="#000" strokeWidth="2" d="M12,9 C9,9 6.83333333,9 5.5,9 C3.5,9 2,7.5 2,5.5 C2,3.5 3.5,2 5.5,2 C7.5,2 9,3.5 9,5.5 C9,6.83333333 9,9 9,12 C9,15 9,17.1666667 9,18.5 C9,20.5 7.5,22 5.5,22 C3.5,22 2,20.5 2,18.5 C2,16.5 3.5,15 5.5,15 C6.83333333,15 9,15 12,15 C15,15 17.1666667,15 18.5,15 C20.5,15 22,16.5 22,18.5 C22,20.5 20.5,22 18.5,22 C16.5,22 15,20.5 15,18.5 C15,17.1666667 15,15 15,12 L15,5.5 C15,3.5 16.5,2 18.5,2 C20.5,2 22,3.5 22,5.5 C22,7.5 20.5,9 18.5,9 L12,9 Z"/></svg>

          <h1 className={styles.opentext}>Hi,<br></br> I&apos;m <br></br>Toby.</h1>

      <div className={rotate.rotateText}>
        <h1 className={rotate.info}>13 y/o </h1>
        <div className={rotate.TextRotateDiv}>
    <h1 className={rotate.TextRotate}>full stack web developer.</h1>
    <h1 className={rotate.TextRotate}>designer.</h1>
    <h1 className={rotate.TextRotate}>nerd.</h1>
    <h1 className={rotate.TextRotate}>hackclubber.</h1>
    <h1 className={rotate.TextRotate}>pizza enthusiast.</h1>
    </div>
  </div>

          <div className={styles.mediv}>
              <Image className={styles.me} src="/me.svg" alt="Toby" height="700" width="700" />
          </div>

          </cmdIcon>
        </ChakraProvider>
        </body>
        </div>
  );
}

const handleKeyDown = () => {
  console.log("keydown");
}
