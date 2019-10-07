import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

function App() {
  console.disableYellowBox = true;
  return (
    <>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="#080a11" />
    </>
  );
}

export default App;
