import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TextStyle, ViewStyle} from 'react-native';

export type NavigationParamList = {
  Home: undefined;
  Intro: undefined;
  Game: {names: string[]};
};

export type SquareTypes = {
  box: number | string;
  onPress: () => void;
};

export type RoundButttonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  titleStyles?: TextStyle;
};

export type InitialStateType = {
  PlayerStore: {
    names: string[];
    squares: any[];
    next_player: boolean;
    moves: number;
  };
};

export type Dipatch =
  | {type: 'RESTART_GAME'}
  | {type: 'REPLAY_GAME'}
  | {type: 'SAVE_PLAYER_NAME'; payload: {names: string[]}}
  | {type: 'SET_SQUARE_VALUE'; payload: {id: any}};

type GameRouteProp = RouteProp<NavigationParamList, 'Game'>;

type GameNavigationProp = StackNavigationProp<NavigationParamList>;

export type GameProps = {
  navigation: GameNavigationProp;
  route: GameRouteProp;
};

export type HomeScreenProps = {
  navigation: HomeNavigatonProps;
};
export type HomeNavigatonProps = StackNavigationProp<
  {Intro: undefined},
  'Intro'
>;

export type IntroProps = {
  navigation: IntroNavigatonProps;
};
export type IntroNavigatonProps = StackNavigationProp<NavigationParamList>;
