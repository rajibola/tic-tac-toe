import React, {useContext, useEffect} from 'react';
import {Alert, BackHandler, Text, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {Board, RoundButtton} from '../components';
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

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Yes',
        onPress: () => {
          dispatch({type: 'REPLAY_GAME'}), navigation.pop(2);
        },
      },
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

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
          onPress={() => {
            dispatch({type: 'REPLAY_GAME'}), navigation.goBack();
          }}
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
