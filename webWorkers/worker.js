export default () => {
	self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
		if (!e) return;

    console.log('In the web worker')
    console.log('e', e.data)

    const url = 'https://jam.alvineandersson.se/api/bubbleSort';

    switch(e.data) {
      case 'bubbleSort':
        fetch('https://jam.alvineandersson.se/api/bubbleSort').then(res => {
          console.log('res', res)
          res.json()
        }).then(data => {
          console.log('data', data)
          const msg = {'type' : bubbleSort, 'data' : data}
          postMessage(msg)
        }).catch(err => {
          console.log('err', err)
        })

      case 'insertionSort':
      case 'selectionSort':
    }





	})
}
