import {SUCCESSFUL_LOGIN} from '../actionCreators/actionTypes'
const saveUserToken = store => next => action => {
    if (action.type === SUCCESSFUL_LOGIN) {
      localStorage.setItem('userToken', action.payload);
    }
    next(action);
  };
  export default saveUserToken