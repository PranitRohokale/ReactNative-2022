import React from 'react';
import {Text, View} from 'react-native';
import CounterApp from './src/screens/CounterApp';

import {Provider} from 'react-redux'
import store from "./src/store"

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <CounterApp />
        <Text>pranit</Text>
      </View>
    </Provider>
  );
};

export default App;
