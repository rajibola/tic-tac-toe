import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {Board} from '../components';
import {RoundButtton} from '../components/round_button';
import {GameStyles as styles} from '../components/styles';
import {AppContext} from '../context/context';
import {GameProps} from '../types/types.d';

export const Game: React.FC<GameProps> = ({navigation, route}) => {
  const {dispatch} = useContext(AppContext);
  const {names} = route.params;

  const renderSign = (a: string) => (
    <View style={styles.sign}>
      <Text style={styles.signText}>{a}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {renderSign('X')}
        <SharedElement id={`item.${names[0]}.playerOne`}>
          <Text style={styles.player}>{names[0]}</Text>
        </SharedElement>
        <Text style={styles.vs}> VS </Text>
        <SharedElement id={`item.${names[1]}.playerTwo`}>
          <Text style={styles.player}>{names[1]}</Text>
        </SharedElement>
        {renderSign('O')}
      </View>
      <Board />

      <View style={styles.row}>
        <RoundButtton
          title="replay"
          onPress={() => dispatch({type: 'REPLAY_GAME'})}
        />
        <RoundButtton
          title="restart"
          onPress={() => {
            dispatch({type: 'REPLAY_GAME'}), navigation.pop(2);
          }}
        />
      </View>
    </View>
  );
};
