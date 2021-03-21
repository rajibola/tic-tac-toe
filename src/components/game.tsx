import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Board} from '.';
import {AppContext} from '../context/context';
import {RoundButtton} from './round_button';
import {GameStyles as styles} from './styles';

export const Game: React.FC = props => {
  const {state, dispatch} = useContext(AppContext);

  const names = state.PlayerStore.names;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.player}>{names[0]}</Text>
        <Text style={styles.vs}> VS </Text>
        <Text style={styles.player}>{names[1]}</Text>
      </View>
      <Board />

      <View style={styles.row}>
        <RoundButtton
          title="replay"
          onPress={() => dispatch({type: 'REPLAY_GAME'})}
        />
        <RoundButtton
          title="restart"
          onPress={() => dispatch({type: 'REPLAY_GAME'})}
        />
      </View>
    </View>
  );
};
