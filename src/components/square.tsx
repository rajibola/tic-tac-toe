import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SquareStyles as styles} from './styles';

type Square = {
  box: number | string;
  onPress: () => void;
};

export const Square: React.FC<Square> = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      activeOpacity={0.8}>
      <Text style={styles.text}>{props.box}</Text>
    </TouchableOpacity>
  );
};
