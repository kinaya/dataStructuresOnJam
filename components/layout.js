import Head from 'next/head'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

export const siteTitle = 'Data Structures on JAM'

const Layout = ({children, home}) => {

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
        <Header>
          <h1>Data structures</h1>
          <p>A simple page explaining data structures using JavaScript</p>
          <img src="/images/datastructures.png" className="logo" alt="logo" />
        </Header>
      ) : (
        <Link href="/">
          <Arrow>
            <img src="/images/arrow.svg" alt="Home" />
          </Arrow>
        </Link>
      )}

      <main>
        {home ? (
          <>
            {children}
          </>
        ):(
          <Container>
            {children}
          </Container>
        )}
      </main>

    </>
  )
}

export default Layout

const Container = styled.div`
  max-width: 900px;
  margin: 4em auto;
  padding: 0 1em;
  @media(min-width: 480px) {
    padding: 0 2em;
  }
`
const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 0 1em;
  @media(min-width: 480px) {
    padding: 0 2em;
  }
`
const Arrow = styled.a`
  position: fixed;
  top: 10px;
  left: 15px;
  display: flex;
  padding: 0.5em;
  text-decoration: none;
  img {
    transition: all 0.3s;
    &:hover, &:active, &:focus {
      transform: translateX(-8px);
    }
  }
`
