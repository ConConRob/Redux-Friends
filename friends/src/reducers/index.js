import react from "react";
import * as types from "../actionCreators/actionTypes";
const initState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};

export function friendReducer(friends = initState, action) {
  switch (action.type) {
    case types.FETCHING_FRIENDS:
      return {...friends, fetchingFriends: true};
    case types.DONE_FETCHING_FRIENDS:
      return {...friends, fetchingFriends: false};
    case types.FAILURE:
      return {...friends, error:action.payload};
    case types.ADD_FRIENDS:
      return { ...friends, fetchingFriends: false, friends: action.payload };
    default:
      return friends;
  }
}
