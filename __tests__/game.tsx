import {NavigationContainer} from '@react-navigation/native';
import {fireEvent, render} from '@testing-library/react-native';
import * as React from 'react';
import MainNavigator from '../src/navigation';
import {Game} from '../src/screens';

// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.setTimeout(30000);

const createTestProps = (props: any) => ({
  navigation: {
    navigate: jest.fn(),
    pop: jest.fn(),
  },

  route: {
    params: {
      names: [],
    },
  },
  ...props,
});

jest.mock('react-native-shared-element', () => {
  const {View} = require('react-native');
  const SharedElement = (props: any) => {
    return <View>{props.children}</View>;
  };

  return {
    __esModule: true,
    SharedElement,
  };
});

describe('Testing Game screen', () => {
  test('page contains the textInputs, text and button', async () => {
    const props: any = createTestProps({});
    const component = <Game {...props} />;

    const {findByText, findByPlaceholderText, findByDisplayValue} = render(
      component,
    );

    const replay = await findByText('replay');
    const restart = await findByText('restart');

    expect(replay).toBeTruthy();
    expect(restart).toBeTruthy();

    fireEvent.press(restart);

    expect(props.navigation.pop).toHaveBeenCalled();
  });
});
