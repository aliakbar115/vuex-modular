<template>
  <div class="container">
    <h1>Vuex</h1>
    <hr>

    <app-result ></app-result>
    <hr>
    <h2>another result</h2>
    <another-result></another-result>
    <hr>

    <app-counter></app-counter>

    <hr>
    <div class="alert alert-success">another counter</div>
    <another-counter></another-counter>

    <hr>
    <hr>
    <input type="text" class="form-control" v-model="name">

    <p>{{name}}</p>
  </div>
</template>

<script>
import Counter from "./Components/Counter";
import Result from "./Components/Result";
import AnotherResult from "./Components/AnotherResult";
import AnotherCounter from "./Components/AnotherCounter";

export default {
  components: {
    appCounter: Counter,
    appResult: Result,
    anotherResult: AnotherResult,
    AnotherCounter:AnotherCounter
  },
  data() {
    return {
      counter:0

    }
  },
  methods: {
    mosavi(event){
      this.counter+=event;
    }
  },
  computed:{
    //   تعریف کنیم  get , set  کار نمی کند باید براش  two-way binding در این حالت به روش عادی
    name:{
      get(){
        return this.$store.getters.getName;
      },
      set(value){
        this.$store.commit('changeName',value)
      }
    }


  }
};
</script>

<style>

</style>
