new Vue({
	el: '#exercise',
	data: {
		value1: '',
		value2: '',
	},
	methods: {
		buttonClicked() {
			alert('Button Clicked!');
		},
		processInput(event) {
			this.value1 = event.target.value;
		},
		processInputEnter(event) {
			this.value2 = event.target.value;
		},
	},
});
