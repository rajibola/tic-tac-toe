import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Square} from '.';
import {AppContext} from '../context/context';
import {calculateWinner} from '../utils/helpers';
import {BoardStyles as styles} from './styles';

export const Board: React.FC = props => {
  const {state, dispatch} = useContext(AppContext);
  const {squares, next_player, names, moves} = state.PlayerStore;

  let winner = calculateWinner(squares);

  const handleClick = async (i: number) => {
    if (winner || squares[i]) return;

    await dispatch({type: 'SET_SQUARE_VALUE', payload: {id: i}});
  };

  let status;
  if (winner) {
    status = `${next_player ? names[0] : names[1]} has won`;
  } else if (!winner && moves === squares.length) {
    status = 'draw';
  } else {
    status = next_player ? names[0] + ' turn' + 'X' : names[1] + ' turn' + 'O';
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
