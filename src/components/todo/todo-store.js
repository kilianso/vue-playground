// if another files require this, the following object is returned.
export default {
	//inital state
	state:{
		todos: [],
		activeFilter: -1,
	},
	//function to modify state
	mutations:{
		ADD_TODO: function(state, action){
			// state in this context is always the state object in this module, so the state above not the global one
			state.todos.push(action.todo);
		},
		CHANGE_FILTER: function(state, action){
			state.activeFilter = action.activeFilter;
		},
		TOGGLE_TODO: function(state, action){
			for(var i=0; i < state.todos.length; i++) {
				if(state.todos[i].id == action){
					state.todos[i].toggled = !state.todos[i].toggled
				}
			}
		}
	}
}
