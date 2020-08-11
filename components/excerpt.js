import Link from 'next/link'
import styles from './excerpt.module.scss'

const Excerpt = ({post}) => {

  return (
    <Link href={`/${post.id}`}><a className={styles.excerpt}>
      {post._embedded['wp:featuredmedia'] && (
        <img className={styles.image} alt="alt" src={post._embedded['wp:featuredmedia'][0].source_url} />
      )}
      <h3 className={styles.title}>{post.title.rendered}</h3>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
    </a></Link>
  )
}

export default Excerpt
