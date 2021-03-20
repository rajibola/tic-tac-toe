/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Game} from './src/components';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello TIC TAC TOE</Text>
      <Game />
    </SafeAreaView>
  );
};

export default App;
