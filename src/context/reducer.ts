import {Alert} from 'react-native';
import {Dipatch} from '../types/types.d';
import {initialState} from './context';

export const PlayerReducer = (state = initialState, action: Dipatch) => {
  const {squares, next_player, names, moves} = state.PlayerStore;

  switch (action.type) {
    case 'RESTART_GAME': {
      return state;
    }

    case 'REPLAY_GAME': {
      return {
        ...state,
        PlayerStore: {
          squares: squares.fill(null),
          next_player: false,
          names,
          moves: 0,
        },
      };
    }

    case 'SAVE_PLAYER_NAME': {
      return {
        ...state,
        PlayerStore: {
          names: action.payload.names,
          squares,
          next_player,
          moves,
        },
      };
    }

    case 'SET_SQUARE_VALUE': {
      const squaresCopy = squares.slice();
      squaresCopy[action.payload.id] = next_player ? 'X' : 'O';
      console.log(moves);
      return {
        ...state,
        PlayerStore: {
          squares: squaresCopy,
          next_player: !next_player,
          moves: moves + 1,
          names,
        },
      };
    }

    default: {
      return state;
    }
  }
};
