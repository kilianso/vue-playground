import Vue from 'vue';
import Vuex from 'vuex';
import todos from 'components/todo/todo-store'

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,// make sure, only mutations are able to change the store
	modules: { // substores from components
		todos: todos
	}
});
