import {SUCCESSFUL_LOGIN} from '../actionCreators/actionTypes'
const saveUserToken = store => next => action => {
    if (action.type === SUCCESSFUL_LOGIN) {
        console.log()
      localStorage.setItem('userToken', action.payload);
    }
    next(action);
  };
  export default saveUserToken