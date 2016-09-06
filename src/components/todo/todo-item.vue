<template>
  <span v-on:click="toggleTodo" v-bind:class="{toggled:todo.toggled}">{{todo.text}}</span>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      todo: Object
    },
		vuex:{
			actions:{
				// ES6 Deconstructor
				toggleTodo: function({ dispatch }, action) {
					//console.log(this.todo.id);
					dispatch('TOGGLE_TODO', this.todo.id);
				}
			},
		}
  });
</script>

<style>
  .toggled {
    text-decoration: line-through;
  }
</style>
