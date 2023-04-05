import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Homepage from './homepage';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Foreon Network</title>
        <meta
          name="description"
          content="Decentralized Prediction Market On Cardano"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dhkccnvyn/image/upload/v1678204829/foreon/Frame_qpugib.svg"
        />
      </Head>

      <Homepage />
    </>
  );
}
