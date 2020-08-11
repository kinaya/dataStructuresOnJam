import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

export const siteTitle = 'Data Structures on JAM'

export default function Layout({ children, home }) {
  return (
    <>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content="Start" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {home ? (
        <header className={styles.header}>
          <h1>Data structures</h1>
          <p>This is a simple page explaining data structures using JavaScript</p>
          <img src="/images/datastructures.png" className="logo" alt="logo" />
        </header>
      ) : (
        <Link href="/">
          <a className={styles.arrow}>
            <img src="/images/arrow.svg" alt="Hem" />
          </a>
        </Link>
      )}

      <main>
        {home ? (
          <>
            {children}
          </>
        ):(
          <div className={styles.container}>
            {children}
          </div>
        )}
      </main>

    </>
  )
}
