import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {RoundButttonProps} from '../types/types.d';
import {RoundButttonStyles as styles} from './styles';

export const RoundButtton: React.FC<RoundButttonProps> = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};
