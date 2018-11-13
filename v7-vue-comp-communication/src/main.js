import Vue from 'vue';
import App from './App.vue';

export const eventBus = new Vue({
  data: {
    description: '',
  },
  methods: {
    changeDescription(desc) {
      this.$emit('description', desc);
    },
  },
});

new Vue({
  el: '#app',
  render: h => h(App),
});
