var data = {
	title: 'The VueJS Instance',
	showParagraph: false,
	info: '',
};

var vm1 = new Vue({
	data: data,
	methods: {
		show: function() {
			this.showParagraph = true;
			this.updateTitle('The VueJS Instance (Updated)');
			console.log(this.$refs.myButton);
			this.$refs.myButton.innerText = 'Test';
		},
		updateTitle: function(title) {
			this.title = title;
		},
	},
	computed: {
		lowercaseTitle: function() {
			return this.title.toLowerCase();
		},
	},
	watch: {
		title: function(value) {
			alert('Title changed, new value: ' + value);
		},
	},
});

setTimeout(() => {
	vm1.info = 'changed by timer';
}, 1000);

vm1.$mount('#app1');
/* console.log (vm1); */
//console.log (vm1.$data)
console.log(vm1.$data === data);
vm1.$refs.heading.innerText = 'something else';

var vm2 = new Vue({
	el: '#app2',
	data: {
		title: 'Hello from Vue Instance #2',
	},
	methods: {
		onChange: function() {
			vm1.title = 'changed';
		},
	},
});

var vm3 = new Vue({
	template: '<h1>Hello From App3</h1>',
});

//vm3.$mount('#app3')
vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);
