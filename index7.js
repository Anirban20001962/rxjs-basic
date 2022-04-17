// Learn concept of merge map

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

let span = document.querySelector('span');

let obs1 = rxjs.fromEvent(input1, 'input');

let obs2 = rxjs.fromEvent(input2, 'input');

obs1.pipe(
	rxjs.operators.mergeMap((event1) => {
		return obs2.pipe(
			rxjs.operators.map(
				(event2) => event1.target.value + event2.target.value
			)
		);
	})
).subscribe({
	next: function (value) {
		span.textContent = value;
	},
});
