import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {SquareStyles as styles} from './styles';

type Square = {
  box: number | string;
  onPress: () => void;
};

export const Square: React.FC<Square> = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.box}</Text>
    </TouchableOpacity>
  );
};
