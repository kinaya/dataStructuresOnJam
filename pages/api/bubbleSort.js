const bubbleSort = (array) => {
  return new Promise((resolve, reject) => {

    var start = process.hrtime()

    for(let i = 0; i < array.length - 1; i++) {
      for(let y = 0; y < array.length - 1 - i; y++) {
        if(array[y] > array[y + 1]) {
          var temp = array[y]
          array[y] = array[y + 1]
          array[y + 1] = temp
        }
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
    const result = await bubbleSort(array)
    res.statusCode = 200
    res.json(result)
  } catch {
    console.log(result)
  }

}
