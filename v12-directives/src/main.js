import Vue from 'vue';
import App from './App.vue';

Vue.directive('highlight', {
	bind(el, binding, vnode) {
		// el.style.backgroundColor = 'green';
		var delay = 0;

		if (binding.modifiers['delayed']) {
			delay = 3000;
		}
		setTimeout(() => {
			if (binding.arg == 'background') el.style.backgroundColor = binding.value;
			else {
				el.style.color = binding.value;
			}
		}, delay);
	},
});

new Vue({
	el: '#app',
	render: h => h(App),
});

// Directive functions:
// bind(el, binding, vnode)  Once attached
// inserted                  inserted into parent node
// update                    once component is updated
// componentUpdated
// unbind
