// Operators like map() or throttleTime()

let observableInterval = rxjs.interval(1000);

let observer = {
	next: function (value) {
		console.log(value);
	},
};

observableInterval
	.pipe(
		rxjs.operators.map((value) => {
			return 'Number ' + value;
		}),
		rxjs.operators.throttleTime(2000)
	)
	.subscribe(observer);
