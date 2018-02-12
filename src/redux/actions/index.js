export const USER_NAME = 'username';
export const PASSWORD = 'password';
export const LOGIN = 'login';


export function username(value) {
  return {
    type: USER_NAME,
    payload: {
      value
    }
  };
}
export function password(value) {
  return {
    type: PASSWORD,
    payload: {
      value
    }
  };
}
// login click action

export function login(value1, value2) {
   return (dispatch, getState) => {
     const state  = getState();
     const loginData = state.login;
     let validation = loginData.dataValidation;
     let errorPopup = loginData.errorPopup;
      if(value1 === loginData.username[0] && value2 === loginData.password[0]){
          validation = true;
          
      }else{
        alert('Invalid ID or password. Please try again.');
        errorPopup = true;
      }
  dispatch({
    type: LOGIN,
    payload: {
      validation
    }
  });
}
}

