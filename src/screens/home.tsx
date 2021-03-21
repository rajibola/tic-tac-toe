import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {HomeStyles as styles} from './styles';

export const Home: React.FC = props => {
  const [playerOne, setplayerOne] = useState('');
  const [playerTwo, setplayerTwo] = useState('');

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position">
        <View>
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

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};
