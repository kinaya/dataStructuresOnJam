import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import styles from './bigo.module.scss'
import { createArray, bubbleSort, insertionSort, selectionSort, runTest } from '../utils/sortingAlgorithms'
import Test from './test'

const Bigo = ({color}) => {

const [bubbleSortResult, setBubbleSortResult] = useState(false)
const [insertionSortResult, setInsertionSortResult] = useState(false)
const [selectionSortResult, setSelectionSortResult] = useState(false)

const bubbleRef = useRef(0)

const array = createArray(5000);

const testPerformance = async () => {
    ReactDOM.flushSync(() => 
      bubbleSort(array).then(result => {
        setBubbleSortResult(result)
      })
    )
    ReactDOM.flushSync(() => {
      insertionSort(array).then(result => {
        setInsertionSortResult(result)
      })
    })
  )
}
//  ReactDOM.flushSync(() => setBubbleSortResult(bubbleSort(array)));
//  ReactDOM.flushSync(() => setInsertionSortResult(insertionSort(array)));
//  ReactDOM.flushSync(() => setSelectionSortResult(selectionSort(array));
/*
<Test name="BubbleSort" refresh={refresh} algorithm={bubbleSort} array={array} result={bubbleSortResult} />
<Test name="InsertionSort" refresh={refresh} algorithm={insertionSort} array={array} result={insertionSortResult} />
<Test name="SelectionSort" refresh={refresh} algorithm={selectionSort} array={array} result={selectionSortResult} />

*/

  return (
    <section className={styles[color]}>
      <div className={styles.inner}>
        <h2>Tests</h2>
        <button onClick={testPerformance}>Run test!</button>
        <h3>BubbleSort</h3>
        {bubbleSortResult} seconds
        <div id="bubble" ref={bubbleRef}></div>
        <h3>InsertionSort</h3>
        {insertionSortResult} seconds
        <h3>SelectionSort</h3>
        {selectionSortResult} seconds
      </div>
    </section>
  )
}

export default Bigo
