import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {AppContext} from '../context/context';
import {IntroProps} from '../types/types.d';
import {IntroStyles as styles} from './styles';

export const Intro: React.FC<IntroProps> = props => {
  const {state} = useContext(AppContext);
  const {names} = state.PlayerStore;

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Game', {names});
    }, 1000);
  });
  return (
    <View style={styles.container}>
      <SharedElement id={`item.${names[0]}.playerOne`}>
        <Text style={styles.player}>{names[0]}</Text>
      </SharedElement>
      <Text style={styles.vs}> VS </Text>

      <SharedElement id={`item.${names[1]}.playerTwo`}>
        <Text style={styles.player}>{names[1]}</Text>
      </SharedElement>
    </View>
  );
};
