export default () => {
	self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
		if (!e) return;

    const url = '/api/bubbleSort';

    fetch(url).then(res => {
      res.json()
    }).then(data => {
      postMessage(data)
    }).catch(err => {
      console.log(err)
    })

	})
}
