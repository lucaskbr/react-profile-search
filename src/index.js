import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#4356E4" />
      <Routes />
    </>
  );
}

export default App;
