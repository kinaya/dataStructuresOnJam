import { useState } from 'react'
import ReactDOM from 'react-dom'
//import { slowAlgorithm, fastAlgorithm, bubbleSort, insertionSort, selectionSort } from '../utils/sortingAlgorithms'

const PerformanceTest = () => {

  const [bubbleSortResult, setBubbleSortResult] = useState(false)
  const [insertionSortResult, setInsertionSortResult] = useState(false)
  //const [selectionSortResult, setSelectionSortResult] = useState(false)

  const testPerformance = async () => {

    await fetch('/api/bubbleSort')
      .then(res => res.json())
      .then(data => {
        setBubbleSortResult(data)
      })

    await fetch('/api/insertionSort')
      .then(res => res.json())
      .then(data => {
        setInsertionSortResult(data)
      })



    //setBubbleSortResult(bubble)

/*    bubbleSort().then(result => {
      setBubbleSortResult(result)
    })
    insertionSort().then(result => {
      setInsertionSortResult(result)
    })
    selectionSort().then(result => {
      setSelectionSortResult(result)
    })*/

  }

  return (
    <div>
      <button onClick={testPerformance}>Run test!</button>
      <div>{bubbleSortResult}</div>
      <div>{insertionSortResult}</div>
    </div>
  )
}

export default PerformanceTest
