import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import fetch from 'node-fetch'
import utilStyles from '../styles/utils.module.scss'

export default function Post({post}) {
  return (
    <Layout>

      <Head>
        <title>{post.title.rendered} | {siteTitle}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingX1}>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
      </article>

    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/posts`)
  const posts = await res.json()

  const paths = posts.map(post => {
    return {
      params: {
        id: post.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps({params}) {
  const res = await fetch(`${process.env.API_URL}/posts/${params.id}`)
  const post = await res.json()

  return {
    props: {
      post: post
    }
  }
}
