import {Alert} from 'react-native';
import {initialState} from './context';

export type Dipatch =
  | {type: 'RESTART_GAME'}
  | {type: 'REPLAY_GAME'}
  | {type: 'SAVE_PLAYER_NAME'; payload: {playerOne: string; playerTwo: string}}
  | {type: 'SET_SQUARE_VALUE'; payload: {id: any}};

export const PlayerReducer = (state = initialState, action: Dipatch) => {
  switch (action.type) {
    case 'RESTART_GAME': {
      return state;
    }

    case 'REPLAY_GAME': {
      const {squares, next_player, names, moves} = state.PlayerStore;

      return {
        ...state,
        PlayerStore: {
          squares: squares.fill(null),
          next_player,
          names,
          moves: 0,
        },
      };
    }

    case 'SAVE_PLAYER_NAME': {
      return state;
    }

    case 'SET_SQUARE_VALUE': {
      const {squares, next_player, names, moves} = state.PlayerStore;
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
