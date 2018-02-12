import initState from './init_state';
import { USER_NAME, PASSWORD, LOGIN } from '../actions/index.js';

// experiment reducer
export default function(state=initState, action = {}) {
  let newState = state;
  switch(action.type) {
	  case USER_NAME : {
		  newState = { ...state };
		  newState.login.username1 = action.payload.value;
		  break;
		}
	  case PASSWORD : {
		  newState = { ...state };
		  newState.login.password1 = action.payload.value;
		  break;
		}
	  case LOGIN : {
		  newState = { ...state };
		  newState.login.dataValidation = action.payload.validation;
		  break;
		}
		default:
		break;
  }
	return newState;
}
