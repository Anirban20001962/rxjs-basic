// Learn about more operators

// debounceTime, distinctUntilChanged

let input = document.getElementById('input0');

let observalbeInput = rxjs.fromEvent(input, 'input');

observalbeInput
	.pipe(
		rxjs.operators.pluck('target', 'value'),
		rxjs.operators.debounceTime(500),
		rxjs.operators.distinctUntilChanged()
	)
	.subscribe({
		next: function (value) {
			console.log(value);
		},
	});
