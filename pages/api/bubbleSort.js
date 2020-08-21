const bubbleSort = () => {
  return new Promise((resolve, reject) => {

    var array = []
    for(let i = 0; i <= items; i++) {
      array.push(Math.floor(Math.random() * Math.floor(items)))
    }

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

  })
}

export default async (req, res) => {

  try {
    const result = await bubbleSort()
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(result))
  } catch {
    console.log(error)
  }

}
