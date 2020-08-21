import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Section from '../components/section'
import PostsGrid from '../components/postsGrid'
import PerformanceTest from '../components/performanceTest'
import utilStyles from '../styles/utils.module.scss'
import fetch from 'node-fetch'
import { useState } from 'react'

export default function Home({pages,posts}) {

  return (
    <Layout home>
      <Head>
        <title>Start | {siteTitle}</title>
      </Head>

      {pages.filter(page => page.id === 2).map(page => {
        return <Section displayTitle={true} title={page.title.rendered} text={page.content.rendered} color="blue" key={page.id} page={page} />
      })}

      {pages.filter(page => page.id === 34).map(page => {
        return <Section displayTitle={true} title={page.title.rendered} text={page.content.rendered} color="yellow" key={page.id} page={page} />
      })}

      <PerformanceTest />

      <PostsGrid posts={posts} />

      {pages.filter(page => page.id === 46).map(page => {
        return <Section displayTitle={true} title={page.title.rendered} text={page.content.rendered} color="red" key={page.id} page={page} />
      })}

      {pages.filter(page => page.id === 42).map(page => {
        return <Section title={page.title.rendered} text={page.content.rendered} color="gray" key={page.id} page={page} />
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
