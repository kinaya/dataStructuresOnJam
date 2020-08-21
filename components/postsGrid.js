import Post from './post'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PostsGrid = ({posts}) => {

  return (
    <Section>
      <Inner>
        <Grid>
          {posts.map((post) => { return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title.rendered}
              image={post._embedded['wp:featuredmedia'][0].source_url}
              text={post.excerpt.rendered}
            />
          )})}
        </Grid>
      </Inner>
    </Section>
  )

}

export default PostsGrid

PostsGrid.propType = {
  posts: PropTypes.array.isRequired,
}

const Section = styled.section`
  padding: 4em 0;
  margin: 0;
  background-color: #F4A261;
`
const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1em;
  @media(min-width: 480px) {
    padding: 0 2em;
  }
`
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2em auto;
  > a {
    flex-basis: 100%;
    @media(min-width: 480px) {
      flex-basis: 48%;
    }
    @media(min-width: 679px) {
      flex-basis: 31%;
    }
    @media(min-width: 1024px) {
      flex-basis: 22%;
    }
  }
`
