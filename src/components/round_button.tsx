import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {RoundButttonProps} from '../types/types.d';
import {RoundButttonStyles as styles} from './styles';

export const RoundButtton: React.FC<RoundButttonProps> = ({
  style,
  onPress,
  title,
  titleStyles,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.title, titleStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};
