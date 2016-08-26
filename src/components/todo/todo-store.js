// if another files require this, the following object is returned.
export default {
	//inital state
	state:{
		todos: [],
		activeFilter: -1
	},
	//function to modify state
	mutations:{
		ADD_TODO: function(state, action){
			// state in this context is always the state object in this module, so the state above not the global one
			state.todos.push(action.todo);
		},
		CHANGE_FILTER: function(state, action){
			state.activeFilter = action.activeFilter;
		}
	}
}
