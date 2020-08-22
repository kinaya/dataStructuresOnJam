export default class WebWorker {
	constructor(worker) {
		const code = worker.toString();
		const blob = new Blob(['('+code+')()']);
		return new Worker(URL.createObjectURL(blob));
	}
}


/*export default class WebWorkerEnabler {
    constructor(worker) {
         let code = worker.toString();
         code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

         const blob = new Blob([code], { type: "application/javascript" });
         return new Worker(URL.createObjectURL(blob));
    }
}*/
