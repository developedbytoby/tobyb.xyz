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
import { MyApp } from "./_app.js";
import rotate from '../styles/Rotate.module.scss';

export default function Home() {
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
        <meta property="og:image" content={"/preview.svg"} />
      </Head>
      <body>
      <ChakraProvider>

          <div className={styles.popupDiv}>
            <button className={styles.popupButton} onClick={handleKeyDown}>⌘</button>
          </div>

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

        </ChakraProvider>
        </body>
        </div>
  );
}

const handleKeyDown = () => {
  console.log("keydown");
}
