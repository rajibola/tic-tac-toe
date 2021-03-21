import {NavigationContainer} from '@react-navigation/native';
import {fireEvent, render} from '@testing-library/react-native';
import * as React from 'react';
import MainNavigator from '../src/navigation';

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

    const {findByText, findByPlaceholderText, findByDisplayValue} = render(
      component,
    );

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
});
