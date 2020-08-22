const insertionSort = (array) => {
  return new Promise((resolve, reject) => {

    var start = process.hrtime()

    for(let i = 1; i < array.length; i++) {
      var itemToMove = array.splice(i,1)[0]
      for(let y = 0; y <= i; y++) {
        if(itemToMove < array[y] || y === i) {
          array.splice(y,0,itemToMove)
          break
        }
      }
    }

    for(let i = 0; i < 9000; i++) {
      for(let y = 0; y < 9000; y++) {
        console.log(y)
      }
    }

    var end = process.hrtime(start)
    const seconds = (end[0]* 1000000000 + end[1]) / 1000000000;

    resolve(seconds)

  })
}

export default async (req, res) => {

  var array = []
  for(let i = 0; i <= 10000; i++) {
    array.push(Math.floor(Math.random() * Math.floor(7000)))
  }

  try {
    const result = await insertionSort(array)
    res.statusCode = 200
    res.json(result)
  } catch {
    console.log(result)
  }

}
