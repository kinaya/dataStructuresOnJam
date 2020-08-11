import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Section from '../components/section'
import Excerpts from '../components/excerpts'
import utilStyles from '../styles/utils.module.scss'
import fetch from 'node-fetch'

export default function Home({pages,posts}) {

  return (
    <Layout home>
      <Head>
        <title>Start | {siteTitle}</title>
      </Head>

      {pages.filter(page => page.id === 2).map(page => {
        return <Section displayTitle={true} color="blue" key={page.id} page={page} />
      })}

      {pages.filter(page => page.id === 34).map(page => {
        return <Section displayTitle={true} color="yellow" key={page.id} page={page} />
      })}

      <Excerpts posts={posts} />

      {pages.filter(page => page.id === 46).map(page => {
        return <Section displayTitle={true} color="red" key={page.id} page={page} />
      })}

      {pages.filter(page => page.id === 42).map(page => {
        return <Section color="gray" key={page.id} page={page} />
      })}

    </Layout>
  )
}

export async function getStaticProps() {

  const pagesRes = await fetch(`${process.env.API_URL}/pages`)
  const pages = await pagesRes.json()

  const postsRes = await fetch(`${process.env.API_URL}/posts?_embed`)
  const posts = await postsRes.json()

  return {
    props: {
      pages,
      posts
    }
  }
}
