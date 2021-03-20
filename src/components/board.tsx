import React from 'react';
import {Text, View} from 'react-native';
import {Square} from '.';
import {BoardStyles as styles} from './styles';

export const Board: React.FC = props => {
  const status = 'Next player: X';
  return (
    <View>
      <Text>{status}</Text>
      <View style={styles.boxContainer}>
        {Array(9)
          .fill(null)
          .map((a, i) => (
            <Square box={i} />
          ))}
      </View>
    </View>
  );
};
