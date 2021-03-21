import {NavigationContainer} from '@react-navigation/native';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import * as React from 'react';
import MainNavigator from '../src/navigation';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing navigation between screens', () => {
  test('page contains the textInputs, text and button', async () => {
    const component = (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );

    const {findByText, findByPlaceholderText} = render(component);

    const button = await findByText('Start Game');
    const subtitle = await findByText('Hello O.team');
    const textInputOne = await findByPlaceholderText('enter player one name');
    const textInputTwo = await findByPlaceholderText('enter player two name');

    expect(button).toBeTruthy();
    expect(subtitle).toBeTruthy();
    expect(textInputOne).toBeTruthy();
    expect(textInputTwo).toBeTruthy();
  });

  test('clicking on the button takes you to intro screen', async () => {
    const component = (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );

    const {
      findByText,
      findByPlaceholderText,
      findByDisplayValue,
      getByText,
    } = render(component);

    const button = await findByText('Start Game');

    const textInputOne = await findByPlaceholderText('enter player one name');
    const textInputTwo = await findByPlaceholderText('enter player two name');

    expect(button).toBeTruthy();

    fireEvent.changeText(textInputOne, 'ridwan');
    fireEvent.changeText(textInputTwo, 'smiley');
    fireEvent.press(button);

    const ridwan = await findByDisplayValue('ridwan');
    const smiley = await findByDisplayValue('smiley');
    const vs = await findByText(' VS ');

    expect(ridwan).toBeTruthy();
    expect(smiley).toBeTruthy();
    expect(vs).toBeTruthy();
  });

  test('Navigating from home to game screen and pressing restart button to go back to home', async () => {
    const component = (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );

    const {findByText, findByPlaceholderText, getByText} = render(component);

    const button = await findByText('Start Game');

    const textInputOne = await findByPlaceholderText('enter player one name');
    const textInputTwo = await findByPlaceholderText('enter player two name');

    fireEvent.changeText(textInputOne, 'ridwan');
    fireEvent.changeText(textInputTwo, 'smiley');
    fireEvent.press(button);

    const restart = await waitFor(() => getByText('restart'));

    fireEvent.press(restart);

    const home = await waitFor(() => getByText('Start Game'));

    expect(home).toBeTruthy();
  });
});
