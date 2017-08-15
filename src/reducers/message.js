import {TODO_ADD, TODOS_LOAD, REPLACE_TODO, TODO_REMOVE} from './todo';

const MESSAGE_SHOW = 'MESSAGE_SHOW';
 
export const showMessage = (message) => ({type: MESSAGE_SHOW, payload: message})

export default function(state='', action) {
	switch (action.type) {
		case MESSAGE_SHOW:
			return action.payload
		case TODO_ADD:
		case TODOS_LOAD:
		case REPLACE_TODO:
		case TODO_REMOVE:
			return ''
		default:
			return state
	}
}