import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer'
import HookIcecreamContainer from './components/HookIcecreamContainer'
import Noodle from './components/Noodle'

function App() {
  return (
    <Provider store={store}>
      <HooksCakeContainer />
      <HookIcecreamContainer />
      <br/> 
      <Noodle />
    </Provider>
  );
}

export default App;
