import {StyleSheet} from 'react-native';
import {wp} from '../utils/layout';

export const GameStyles = StyleSheet.create({
  container: {
    // alignItems: 'center',
  },
});

export const SquareStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: wp(100),
    height: wp(100),
  },
});

export const BoardStyles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: wp(300),
    alignSelf: 'center',
  },
});
