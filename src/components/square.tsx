import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SquareTypes} from '../types/types.d';
import {SquareStyles as styles} from './styles';

export const Square: React.FC<SquareTypes> = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      activeOpacity={0.8}>
      <Text style={styles.text}>{props.box}</Text>
    </TouchableOpacity>
  );
};
