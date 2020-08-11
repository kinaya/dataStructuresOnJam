import styles from './section.module.scss'

const Section = ({page, color, displayTitle}) => {

  return (
    <section className={styles[color]}>
      <div className={styles.inner}>
        {displayTitle && (
          <h2>{page.title.rendered}</h2>
        )}
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </div>
    </section>
  )
}

export default Section
