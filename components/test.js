import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Test = ({name, time}) => {

  return (
    <StyledTest>
      <h3>{name}</h3>
      {time == 'fetching' && (
        <>Loading...</>
      )}
      {time > 0 && (
        <>{time.toFixed(3)}s</>
      )}
    </StyledTest>
  )

}

export default Test

Test.propType = {
  name: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
}

const StyledTest = styled.div`
  text-align: center;
  flex-basis: 30%;
`
