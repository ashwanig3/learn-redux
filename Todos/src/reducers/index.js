var toDos = {todoArray : []}

export default (state=toDos, action) => {
	switch(action.type) {
		case 'ADD_TODOS': return {todoArray : [...state.todoArray, action.value]};
		default: return state;
	}
}

