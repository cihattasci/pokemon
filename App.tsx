import React from 'react';
import AppNavigator from './src/navigation';
import {Provider} from 'react-redux';
import { store } from './src/stores/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
