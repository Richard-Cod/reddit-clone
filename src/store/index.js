import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import subreddits from '@/store/subreddits';

import { vuexfireMutations } from 'vuexfire'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
  },
  mutations: vuexfireMutations,
  actions: {
  },
  modules: {
    auth,
    subreddits
  }
})
