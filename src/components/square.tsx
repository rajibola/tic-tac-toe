import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {SquareStyles as styles} from './styles';

type Square = {
  box: number;
};

export const Square: React.FC<Square> = props => {
  const [clicked, setClicked] = useState('');
  return (
    <TouchableOpacity style={styles.container} onPress={() => setClicked('X')}>
      <Text>{clicked || props.box}</Text>
    </TouchableOpacity>
  );
};
