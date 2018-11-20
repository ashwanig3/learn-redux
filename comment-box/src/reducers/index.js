 var intialState = {
 	comments: []
 }

 export default (state= intialState, action) => {
 	switch(action.type) {
 		case 'ADD_COMMENT_BOX':
 		return {
 			comments: [...state.comments, action.value]
 		}
 	}
 }