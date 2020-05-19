import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer'
import HookIcecreamContainer from './components/HookIcecreamContainer'

function App() {
  return (
    <Provider store={store}>
      <HooksCakeContainer />
      <HookIcecreamContainer />
    </Provider>
  );
}

export default App;
