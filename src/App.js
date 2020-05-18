import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeCntainer from './components/cakeContainer'

function App() {
  return (
    <Provider store={store}>
      <CakeCntainer />
    </Provider>
  );
}

export default App;
