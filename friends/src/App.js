import React, { Component } from "react";
import styled from "styled-components";
import FriendListView from "./views/FriendListView";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { friendReducer } from "./reducers/index";
import saveUserToken from './middleware/saveUserToken';

const rootReducers = combineReducers({ friendReducer });

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk, saveUserToken),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const StyledApp = styled.div`
  width: 500px;
  margin: 50px auto;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <StyledApp>
            <FriendListView />
          </StyledApp>
        </Provider>
      </Router>
    );
  }
}

export default App;
