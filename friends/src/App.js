import React, { Component } from "react";
import styled from "styled-components";
import FriendListView from "./views/FriendListView";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { friendReducer } from "./reducers/index";

const rootReducers = combineReducers({friendReducer}); 

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

const StyledApp = styled.div`
  width: 500px;
  margin: 50px auto;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StyledApp>
          <FriendListView />
        </StyledApp>
      </Provider>
    );
  }
}

export default App;
