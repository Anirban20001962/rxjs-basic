let button2 = document.getElementById('btn2');

let obs_btn_1 = rxjs.fromEvent(button2, 'click');
let obs_2 = rxjs.interval(1000);

obs_btn_1
	.pipe(
		rxjs.operators.switchMap((event) => {
			return obs_2;
		})
	)
	.subscribe((value) => console.log(value));
