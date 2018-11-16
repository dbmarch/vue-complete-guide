import Vue from 'vue';
import App from './App.vue';

Vue.filter('count', function(value) {
	return value.concat(` (${value.length})`);
});

Vue.mixin({
	filters: {
		reverseglobal(text) {
			console.log('filter reverse global ');
			let textArray = text.split('');
			return textArray.reverse().join('');
		},
	},
	created() {
		console.log('global created');
	},
});

new Vue({
	el: '#app',
	render: h => h(App),
});
