/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {AppProvider} from './src/context/context';
import MainNavigator from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
