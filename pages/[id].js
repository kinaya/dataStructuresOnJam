import Layout from '../components/layout'
import Head from 'next/head'
import fetch from 'node-fetch'
import utilStyles from '../styles/utils.module.scss'

export default function Post({post}) {
  return (
    <Layout>

      <Head>
        <title>{post.title.rendered}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingX1}>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
      </article>

    </Layout>
  )
}

export async function getStaticPaths() {

  const res = await fetch('http://datastructuresonjam.hemsida.eu/wp-json/wp/v2/posts')
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
  const res = await fetch(`http://datastructuresonjam.hemsida.eu/wp-json/wp/v2/posts/${params.id}`)
  const post = await res.json()

  return {
    props: {
      post: post
    }
  }
}
