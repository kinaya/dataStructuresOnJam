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
          content="Data structures on a JAM-stack using Next.js"
        />
        <meta
          property="og:image"
          content='/images/datastructures.png'
        />
        <meta name="og:title" content="Start" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {home ? (
        <header className={styles.header}>
          <h1>Data structures</h1>
          <p>A simple page explaining data structures using JavaScript</p>
          <img src="/images/datastructures.png" className="logo" alt="logo" />
        </header>
      ) : (
        <Link href="/">
          <a className={styles.arrow}>
            <img src="/images/arrow.svg" alt="Home" />
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
