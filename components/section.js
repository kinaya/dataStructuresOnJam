import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = ({title, text, displayTitle, color}) => {

  return (
    <StyledSection className={`${color}-bg`}>
      <Inner>
        {displayTitle && (
          <h2>{title}</h2>
        )}
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </Inner>
    </StyledSection>
  )
}

export default Section

const StyledSection = styled.section`
  padding: 4em 0;
  margin: 0;
`
const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1em;
  @media(min-width: 480px) {
    padding: 0 2em;
  }
`
