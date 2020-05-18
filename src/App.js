import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeCntainer from './components/cakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'

function App() {
  return (
    <Provider store={store}>
      {/* <CakeCntainer /> */}
      <HooksCakeContainer />
    </Provider>
  );
}

export default App;
