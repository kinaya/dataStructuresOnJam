export default () => {
	self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
		if (!e) return;

    console.log('In the web worker')

    const url = 'https://jam.alvineandersson.se/api/bubbleSort';

    fetch(url).then(res => {
      console.log('res', res)
      res.json()
    }).then(data => {
      console.log('data', data)
      postMessage(data)
    }).catch(err => {
      console.log('err', err)
    })

	})
}
