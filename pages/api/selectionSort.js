const selectionSort = (array) => {
  return new Promise((resolve, reject) => {

    var start = process.hrtime()

    for(let i = 0; i < array.length; i++) {
      var smallestIndex = i

      for(let y = i + 1; y < array.length; y++) {
        if(array[y] < smallestIndex) {
          smallestIndex = y
        }
      }

      if(i != smallestIndex) {
        var temp = array[i];
        array[i] = array[smallestIndex]
        array[smallestIndex] = temp
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
    const result = await selectionSort(array)
    res.statusCode = 200
    res.json(result)
  } catch {
    console.log(result)
  }

}
