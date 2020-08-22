export default () => {
	self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
		if (!e) return;

    switch(e.data) {
      case 'bubbleSort':
        fetch('https://jam.alvineandersson.se/api/bubbleSort').then(res => {
          return res.json()
        }).then(data => {
          const msg = {'type' : 'bubbleSort', 'data' : data}
          postMessage(msg)
        })
        break;
      case 'insertionSort':
        fetch('https://jam.alvineandersson.se/api/insertionSort').then(res => {
          return res.json()
        }).then(data => {
          const msg = {'type' : 'insertionSort', 'data' : data}
          postMessage(msg)
        })
        break;
      case 'selectionSort':
        fetch('https://jam.alvineandersson.se/api/selectionSort').then(res => {
          return res.json()
        }).then(data => {
          const msg = {'type' : 'selectionSort', 'data' : data}
          postMessage(msg)
        })
        break;
    }

	})
}
