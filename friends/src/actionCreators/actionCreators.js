import * as types from "./actionTypes";
import axios from "axios";
const url = "http://localhost:5000/api/";
const token = "eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ";
axios.defaults.headers.common['Authorization'] = token;



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

