import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {AppContext} from '../context/context';
import {IntroStyles as styles} from './styles';

export type HomeScreenProps = {
  navigation: HomeNavigatonProps;
};
export type HomeNavigatonProps = StackNavigationProp<{Game: undefined}, 'Game'>;

export const Intro: React.FC<HomeScreenProps> = props => {
  const {state} = useContext(AppContext);
  const {names} = state.PlayerStore;

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Game');
    }, 1000);
  });
  return (
    <View style={styles.container}>
      <Text style={styles.player}>{names[0]}</Text>
      <Text style={styles.vs}> VS </Text>
      <Text style={styles.player}>{names[1]}</Text>
    </View>
  );
};
