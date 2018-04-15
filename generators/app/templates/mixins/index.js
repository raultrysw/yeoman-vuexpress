import Vue from 'vue'
import axiosMixin from './make-request'

const mixins = [axiosMixin]

mixins.forEach(mixin => Vue.mixin(mixin))
