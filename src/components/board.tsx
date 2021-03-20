import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {Square} from '.';
import {calculateWinner} from '../utils/helpers';
import {BoardStyles as styles} from './styles';

export const Board: React.FC = props => {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const [alert, setAlert] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = (i: any) => {
    const squaresCopy = squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    setCounter(counter + 1);

    squaresCopy[i] = player ? 'X' : 'O';
    setSquare(squaresCopy);
    setPlayer(!player);

    if (counter === 8 && !winner) {
      setAlert(true);
    }
  };

  const winner = calculateWinner(squares);

  if (alert) {
    Alert.alert('no winner', '', [
      {
        text: 'Replay',
        onPress: () => {
          setSquare(squares.map(_ => null));
          setCounter(0);
        },
      },
      {
        text: 'Restart Game',
        onPress: () => {
          setSquare(squares.map(_ => null));
          setCounter(0);
        },
      },
    ]);

    setAlert(false);
  }

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (player ? 'X' : 'O');
  }
  return (
    <View>
      <Text>{status}</Text>
      <View style={styles.boxContainer}>
        {squares.map((a, i) => (
          <Square box={squares[i]} onPress={() => handleClick(i)} key={i} />
        ))}
      </View>
    </View>
  );
};
