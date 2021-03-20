import React from 'react';
import {Text, View} from 'react-native';
import {Board} from '.';
import {GameStyles as styles} from './styles';

export const Game: React.FC = props => {
  return (
    <View style={styles.container}>
      <Text>Game</Text>
      <Board />
    </View>
  );
};
