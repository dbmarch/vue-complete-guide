import Vue from 'vue';
import App from './App.vue';

Vue.filter('to-lowercase', function(value) {
	console.log('Global filter');
	return value.toLowerCase();
});

Vue.mixin({
	created() {
		console.log('GlobalMixin Created');
	},
});
new Vue({
	el: '#app',
	render: h => h(App),
});
