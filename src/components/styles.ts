import {StyleSheet} from 'react-native';
import {font} from '../constants/font';
import {hp, wp} from '../utils/layout';

export const GameStyles = StyleSheet.create({
  vs: {
    ...font[1],
    lineHeight: hp(55),
    fontSize: hp(50),
    marginHorizontal: wp(4),
    letterSpacing: -wp(5),
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {},
  player: {
    alignSelf: 'center',
    fontSize: hp(35),
    fontFamily: 'YanoneKaffeesatz-Regular',
    textTransform: 'lowercase',
  },
});

export const SquareStyles = StyleSheet.create({
  text: {
    fontSize: hp(50),
  },
  container: {
    borderWidth: 1,
    width: wp(100),
    height: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
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
