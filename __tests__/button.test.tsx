import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';
import {Text} from 'react-native';
import {RoundButtton} from '../src/components';

describe('Button', () => {
  it('Button component renders correctly', () => {
    const text = 'Login';
    const instance = renderer.create(
      <RoundButtton title={text} onPress={() => null} />,
    );
    expect(instance).toMatchSnapshot();
  });
  it('RoundButtton component renders correctly after an update', () => {
    const value1 = 'Hello';
    const value2 = 'Hi';

    const instance = renderer.create(
      <RoundButtton title={value1} onPress={() => null} />,
    );
    const textInstance = instance.root.findByType(Text);
    expect(textInstance.props.children).toBe(value1);

    instance.update(<RoundButtton title={value2} onPress={() => null} />);
    expect(textInstance.props.children).toBe(value2);
  });

  it('RoundButtton responds to onPress', () => {
    const mockFn = jest.fn();

    const {getByText} = render(<RoundButtton title="TEST" onPress={mockFn} />);

    fireEvent.press(getByText('TEST'));

    expect(mockFn).toBeCalled();
  });
});
