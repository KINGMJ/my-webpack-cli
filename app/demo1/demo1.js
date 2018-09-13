import Vue from 'vue'
import Demo1 from './Demo1.vue';

const demo1 = new Vue({
    render: h=>h(Demo1)
}).$mount('#container');