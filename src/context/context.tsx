import React from 'react';
import {createContext} from 'react';
import {Dipatch, PlayerReducer} from './reducer';

export type InitialStateType = {
  PlayerStore: {
    names: string[];
    squares: any[];
    next_player: boolean;
    moves: number;
  };
};

export const initialState: InitialStateType = {
  PlayerStore: {
    squares: Array(9).fill(null),
    names: ['ridwan', 'maryam'],
    next_player: false,
    moves: 0,
  },
};

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<Dipatch>;
}>({
  state: initialState,
  dispatch: () => null,
});

export function AppProvider(props: any) {
  const [state, dispatch] = React.useReducer(PlayerReducer, initialState);
  const value = {state, dispatch};
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
