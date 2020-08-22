export default () => {
	self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
		if (!e) return;

    console.log('In the web worker')
    console.log('e', e.data)

    switch(e.data) {
      case 'bubbleSort':
        fetch(url).then(res => {
          console.log('res', res)
          console.log('res.body', res.body)
          res.body.json()
        }).then(data => {
          console.log('data', data)
          const msg = {'type' : bubbleSort, 'data' : data}
          postMessage(msg)
        }).catch(err => {
          console.log('err', err)
        })
    }

    const url = 'https://jam.alvineandersson.se/api/bubbleSort';



	})
}
