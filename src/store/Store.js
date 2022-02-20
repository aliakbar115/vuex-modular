import Vue from 'vue';
import Vuex from 'vuex';
import counter from './Modules/counter'
import * as actions from './StoreItems/StoreActions';
import * as mutations from './StoreItems/StoreMutations';
import * as getters from './StoreItems/StoreGetters';

//npm install --save vuex@3.0.0    نسخه 3 باید در ویو 2 نصب شود
Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {  // یک سری متغییرهایی که در پروژه استفاده می کنیم اینجا ذخیره می کنیم
    name:'AliAkbar'
  },
  getters:getters,  // es6 چون اسم یکی است به صورت تکی هم بنویسیم اشکالی ندارد
  mutations:mutations,
  actions:actions,
  modules:{
    counter:counter
  }
});





