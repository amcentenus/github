import React from 'react';
import { StatusBar } from 'react-native';

import './src/config/ReactotronConfig';
import Routes from './src/Routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
};

export default App;
