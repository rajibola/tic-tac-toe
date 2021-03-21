import * as React from 'react';
import 'react-native-gesture-handler';
import {StackNavigationOptions} from '@react-navigation/stack';
import {
  createSharedElementStackNavigator,
  SharedElementsComponentConfig,
} from 'react-navigation-shared-element';
import {NavigationParamList} from '../types/types.d';
import {Game, Home, Intro} from '../screens';

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

const SharedConfig: SharedElementsComponentConfig = route => {
  const {names} = route.params;
  console.log(names);
  return [
    {
      id: `item.${names[0]}.playerOne`,
      animation: 'move',
    },
    {
      id: `item.${names[1]}.playerTwo`,
      animation: 'move',
    },
  ];
};

const RootStack = createSharedElementStackNavigator<NavigationParamList>();

export default function MainNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home" screenOptions={options}>
      <RootStack.Screen
        name="Game"
        component={Game}
        sharedElementsConfig={SharedConfig}
      />
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Intro" component={Intro} />
    </RootStack.Navigator>
  );
}
