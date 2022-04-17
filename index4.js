// Learn the concept of filters

let observableFilter = rxjs.interval(1000);

observableFilter
	.pipe(
		rxjs.operators.filter((value) => {
			return value % 2 === 0;
		})
	)
	.subscribe({
		next: function (value) {
			console.log(value);
		},
		error: function (error) {
			console.log(error);
		},
	});
