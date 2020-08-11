import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.scss'

export default function NotFound() {
  return (
    <Layout>
      <Head>
        <title>Page not found</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>The page could not be found..</h1>
        <Link href="/"><a>Back to frontpage</a></Link>
      </section>
    </Layout>
  )
}
