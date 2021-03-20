import React from 'react';
import {Text, View} from 'react-native';
import {Board} from '.';
import {GameStyles as styles} from './styles';

export const Game: React.FC = props => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.player}>Ridwan </Text>
        <Text style={styles.vs}>VS</Text>
        <Text style={styles.player}> Maryam</Text>
      </View>
      <Board />
    </View>
  );
};
