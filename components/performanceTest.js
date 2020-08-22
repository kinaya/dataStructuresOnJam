import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Test from './test'
import styled from 'styled-components'
import worker from '../webWorkers/worker.js';
import WebWorker from '../webWorkers/workerSetup';

const PerformanceTest = () => {

  const [bubbleSortResult, setBubbleSortResult] = useState(false)
  const [insertionSortResult, setInsertionSortResult] = useState(false)
  const [selectionSortResult, setSelectionSortResult] = useState(false)
  const [isFetching, setIsFetching] = useState(false)

  var webWorker = false;

  useEffect(() => {

    webWorker = new WebWorker(worker);

    webWorker.addEventListener('message', event => {
      if(event.data.type === 'bubbleSort') {
        setBubbleSortResult(event.data.data)
      }
      if(event.data.type === 'insertionSort') {
        setInsertionSortResult(event.data.data)
      }
      if(event.data.type === 'selectionSort') {
        setSelectionSortResult(event.data.data)
      }
    })

    webWorker.addEventListener('error', event => {
      console.log('Error from web worker', event)
    })

  }, []);

  useEffect(() => {
    if(bubbleSortResult == 'fetching' || insertionSortResult == 'fetching' || selectionSortResult == 'fetching') {
      setIsFetching(true)
    } else {
      setIsFetching(false)
    }
  }, [bubbleSortResult, insertionSortResult, selectionSortResult])

  const testPerformance = () => {

    setBubbleSortResult('fetching')
    webWorker.postMessage('bubbleSort');

    setInsertionSortResult('fetching')
    webWorker.postMessage('insertionSort');

    setSelectionSortResult('fetching')
    webWorker.postMessage('selectionSort');

  }

  return (
    <Container className="red-bg">
      <h2>Test performance</h2>
      <Paragraph>Click the button below to test the performance of different sorting algorithm. The test will sort an array of 10000 random numbers, and report back the time it took for each.</Paragraph>
      <StyledButton className={`${isFetching ? 'not-active' : 'active'}`} onClick={isFetching ? undefined : testPerformance}>Run test!</StyledButton>
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
  &.not-active {
    cursor: default;
    background-color: #333333;
  }
`
const TestGrid = styled.div`
  max-width: 900px;
  margin: 2em auto 0;
  display: flex;
  justify-content: space-between;
`
