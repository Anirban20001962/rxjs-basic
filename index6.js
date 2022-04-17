// Learn the concept of scan , reduce

let observalbeList = rxjs.of(1, 2, 3, 4);

observalbeList
	.pipe(
		rxjs.operators.reduce((total, currentVal) => {
			return total + currentVal;
		}, 0)
	)
	.subscribe({
		next: function (value) {
			console.log(value);
		},
	});
