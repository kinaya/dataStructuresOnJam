export const createArray = items => {
  var array = []
  for(let i = 0; i <= items; i++) {
    array.push(Math.floor(Math.random() * Math.floor(items)))
  }
  return array
}

export const fastAlgorithm  = () => {
  return new Promise((resolve, reject) => {
    resolve('fast')
  })
}

export const slowAlgorithm  = () => {
  return new Promise((resolve, reject) => {
    const array = []
    for(let y = 0; y < 9000; y++) {
      array.push(y);
    }
    resolve('slow')
  })
}

var originalArray = createArray(10000)

export const bubbleSort = () => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      var array = [...originalArray]

      const start = performance.now()
      for(let i = 0; i < array.length - 1; i++) {
        for(let y = 0; y < array.length - 1 - i; y++) {
          if(array[y] > array[y + 1]) {
            var temp = array[y]
            array[y] = array[y + 1]
            array[y + 1] = temp
          }
        }
      }
      const end = performance.now()
      resolve( ((end-start) * 0.001).toFixed(2) )

    }, 0)

  })
}

export const insertionSort = () => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      var array = createArray(7000)

      const start = performance.now();
      for(let i = 1; i < array.length; i++) {
        var itemToMove = array.splice(i,1)[0]
        for(let y = 0; y <= i; y++) {
          if(itemToMove < array[y] || y === i) {
            array.splice(y,0,itemToMove)
            break
          }
        }
      }

      const end = performance.now()
      resolve( ((end-start) * 0.001).toFixed(2) )
    }, 100)

  })
}

export const selectionSort = () => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      var array = createArray(7000)

      const start = performance.now()
      for(let i = 0; i < array.length; i++) {
        var smallestIndex = i

        // Check rest of array
        for(let y = i + 1; y < array.length; y++) {
          if(array[y] < smallestIndex) {
            smallestIndex = y
          }
        }

        // Swap
        if(i != smallestIndex) {
          var temp = array[i];
          array[i] = array[smallestIndex]
          array[smallestIndex] = temp
        }
      }

      const end = performance.now()
      resolve( ((end-start) * 0.001).toFixed(2) )
    }, 200)

  })
}
