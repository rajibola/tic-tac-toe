import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {RoundButttonStyles as styles} from './styles';

type RoundButtton = {
  title: string;
  onPress: () => void;
};

export const RoundButtton: React.FC<RoundButtton> = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};
