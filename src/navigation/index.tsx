import * as React from 'react';
import 'react-native-gesture-handler';
import {StackNavigationOptions} from '@react-navigation/stack';
import {
  createSharedElementStackNavigator,
  SharedElementsComponentConfig,
} from 'react-navigation-shared-element';
import {NavigationParamList} from '../types/types.d';
import {Game} from '../components';
import {Home} from '../screens/home';

const options: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: ({current: {progress}}) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
  gestureEnabled: false,
};

const RootStack = createSharedElementStackNavigator<NavigationParamList>();

export default function MainNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home" screenOptions={options}>
      <RootStack.Screen name="Game" component={Game} />
      <RootStack.Screen name="Home" component={Home} />
      {/* <RootStack.Screen
        name="Contact"
        component={Contact}
        sharedElementsConfig={SharedConfig}
      /> */}
    </RootStack.Navigator>
  );
}
