import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Post = ({id,image,title,text}) => {

  return (
    <Link href={`/${id}`}><StyledPost>
      {image && (
        <Image alt="alt" src={image}></Image>
      )}
      <Title>{title}</Title>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </StyledPost></Link>
  )

}

export default Post

Post.propType = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired
}

const StyledPost = styled.a`
  margin-bottom: 1em;
  text-decoration: none;
  text-align: center;
  text-decoration: none;
  color: #111111;
  &:hover {
    color: #111111;
    text-decoration: none;
  }
`
const Image = styled.img`
  max-width: 100%;
  border-radius: 50%;
  transition: all 0.3s;
  margin-bottom: 0.5em;
`
const Title = styled.h3`
  margin: 0;
`
