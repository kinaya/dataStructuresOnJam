import Excerpt from './excerpt'
import styles from './excerpts.module.scss'

const Excerpts = ({posts}) => {

  return (
    <section id="structures" className={styles.section} >
      <div className={styles.inner}>
        <div className={styles.grid}>
          {posts.map((post) => {
            return <Excerpt key={post.id} post={post} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Excerpts
