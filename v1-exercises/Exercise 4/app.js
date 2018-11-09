new Vue({
	el: '#exercise',
	data: {
		effectClasses: {
			highlight: false,
			shrink: true,
		},
		userClass: '',
		isVisible: true,

		userStyle: {
			backgroundColor: 'red',
			color: 'white',
		},
		progressBar: {
			width: '0px',
			height: '20px',
			backgroundColor: 'red',
		},
	},
	methods: {
		startEffect: function() {
			var vm = this;
			setInterval(function() {
				vm.effectClasses.highlight = !vm.effectClasses.highlight;
				vm.effectClasses.shrink = !vm.effectClasses.shrink;
			}, 1000);
		},
		startProgress: function() {
			let width = 10;
			var vm = this;

			setInterval(function() {
				vm.progressBar.width = width + 'px';
				console.log(vm.progressBar.width);
				if (width < 300) width += 10;
			}, 1000);
		},
	},
});
