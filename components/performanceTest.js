import { useState } from 'react'
import ReactDOM from 'react-dom'
import Test from './test'
import styled from 'styled-components'

const PerformanceTest = () => {

  const [bubbleSortResult, setBubbleSortResult] = useState(false)
  const [insertionSortResult, setInsertionSortResult] = useState(false)
  const [selectionSortResult, setSelectionSortResult] = useState(false)

  const testPerformance = async () => {

    setBubbleSortResult('fetching')
    await fetch('/api/bubbleSort')
      .then(res => res.json())
      .then(data => {
        setBubbleSortResult(data)
      })

    setInsertionSortResult('fetching')
    await fetch('/api/insertionSort')
      .then(res => res.json())
      .then(data => {
        setInsertionSortResult(data)
      })

    setSelectionSortResult('fetching')
    await fetch('/api/selectionSort')
      .then(res => res.json())
      .then(data => {
        setSelectionSortResult(data)
      })

  }

  return (
    <Container className="red-bg">
      <h2>Test performance</h2>
      <Paragraph>Click the button below to test the performance of different sorting algorithm. The test will sort an array of 10000 random numbers, and report back the time it took for each.</Paragraph>
      <StyledButton onClick={testPerformance}>Run test!</StyledButton>
      <TestGrid>
        <Test name="Bubble Sort" time={bubbleSortResult} />
        <Test name="Insertion Sort" time={insertionSortResult} />
        <Test name="Selection Sort" time={selectionSortResult} />
      </TestGrid>
    </Container>
  )
}

export default PerformanceTest

const Container = styled.div`
  padding: 4em 1em;
  text-align: center;
`
const Paragraph = styled.div`
  max-width: 500px;
  margin: 0 auto 1em;
`
const StyledButton = styled.button`
  margin: 0 auto;
  display: block;
  padding: 1em 2em;
  background-color: #222222;
  border: 0;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #333333;
  }
`
const TestGrid = styled.div`
  max-width: 900px;
  margin: 2em auto 0;
  display: flex;
  justify-content: space-between;
`
