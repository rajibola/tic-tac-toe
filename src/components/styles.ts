import {Platform, StyleSheet} from 'react-native';
import {colors, font} from '../constants';
import {getStatusBarHeight, hp, wp} from '../utils/layout';

export const RoundButttonStyles = StyleSheet.create({
  title: {
    ...font[2],
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: hp(25),
    lineHeight: hp(40),
  },
  container: {
    height: hp(40),
    paddingHorizontal: wp(10),
    width: wp(120),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    borderRadius: wp(2),
  },
});

export const GameStyles = StyleSheet.create({
  signText: {
    ...font[1],
    fontSize: hp(25),
    lineHeight: hp(30),
  },
  sign: {
    marginHorizontal: wp(10),
    width: wp(50),
    height: wp(50),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(50),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: hp(25),
    width: wp(300),
  },
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
    marginVertical: hp(30),
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
  },
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
    borderWidth: wp(2),
    width: wp(100),
    height: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -wp(2),
    marginTop: -wp(2),
    borderColor: colors.dark,
  },
});

export const BoardStyles = StyleSheet.create({
  status: {
    textAlign: 'center',
    ...font[2],
    fontSize: hp(30),
    lineHeight: hp(30),
    color: colors.blue,
    textTransform: 'uppercase',
    marginVertical: hp(20),
    letterSpacing: hp(1),
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: wp(300),
    alignSelf: 'center',
  },
});
