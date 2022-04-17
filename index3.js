// Learn the concept of subject

let subject = new rxjs.Subject();

subject.subscribe({
	complete: function () {
		console.log('Completed Observer A');
	},
});

subject.subscribe({
	complete: function () {
		console.log('Completed Observer B');
	},
});

subject.complete();
