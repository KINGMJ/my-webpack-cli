import Vue from 'vue';
import Demo2 from './Demo2.vue';
import './demo2.css';
import './demo2.scss';

const demo2 = new Vue({
    render: h=>h(Demo2)
}).$mount('#container');