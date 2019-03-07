import * as types from "./actionTypes";
import axios from "axios";
const url = "http://localhost:5000/api/";


export const login = (username, password, cb=()=>{}) => dispatch => {
  axios.post(`${url}login`, {username, password})
    .then(res => {
      console.log(res.data)
      dispatch({type: types.SUCCESSFUL_LOGIN, payload: res.data.payload })
      cb();
    });
}

export const getFriendsAsyc = () => dispatch => {
  dispatch({type: types.FETCHING_FRIENDS})
  axios.get(`${url}friends`)
    .then(res => {
      dispatch({ type: types.ADD_FRIENDS, payload: res.data });
      dispatch({type: types.DONE_FETCHING_FRIENDS})
    })
    .catch(err => {
      dispatch({ type: types.FAILURE, payload: err });
      dispatch({type: types.DONE_FETCHING_FRIENDS})
    });
};

export const addFriendAsync = (friend) => dispatch => {
  axios.post(`${url}friends`, friend)
    .then(res => {
      dispatch({type: types.ADD_FRIENDS,  payload: res.data })
    })
    .catch(err => {
      dispatch({ type: types.FAILURE, payload: err });
    });
}

