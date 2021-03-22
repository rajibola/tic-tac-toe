import React, {useContext, useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppContext} from '../context/context';
import {HomeScreenProps} from '../types/types.d';
import {hp} from '../utils/layout';
import {HomeStyles as styles} from './styles';

export const Home: React.FC<HomeScreenProps> = props => {
  const [playerOne, setplayerOne] = useState('');
  const [playerTwo, setplayerTwo] = useState('');
  const {dispatch} = useContext(AppContext);

  const handleStart = () => {
    if (playerOne && playerTwo) {
      dispatch({
        type: 'SAVE_PLAYER_NAME',
        payload: {names: [playerOne, playerTwo]},
      });

      props.navigation.navigate('Intro');
    } else {
      return Alert.alert('enter a valid name');
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.inputContainer}>
          <Text style={styles.title}>
            Hello <Text style={styles.o}>O</Text>
            <Text style={styles.team}>.team</Text>
          </Text>

          <Text style={styles.start}>
            Start Game by pressing {'\n'}the button below
          </Text>

          <TextInput
            onChangeText={setplayerOne}
            value={playerOne}
            placeholder={'enter player one name'}
            style={styles.input}
          />

          <TextInput
            onChangeText={setplayerTwo}
            value={playerTwo}
            placeholder={'enter player two name'}
            style={styles.input}
          />
        </View>
      </KeyboardAvoidingView>

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonTitle}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};
