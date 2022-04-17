// Learn the concept of Observables, Observers and Subscriptions

let button = document.getElementById('btn1');

const observerable = new rxjs.Observable((subscriber) => {
	button.onclick = function (event) {
		subscriber.next(event);
		subscriber.complete();
	};
});

const subscription = observerable.subscribe({
	next: function (value) {
		console.log(value);
	},
	error: function (error) {
		console.log(error);
	},
	complete: function () {
		console.log('Completed');
		subscription.unsubscribe();
	},
});
