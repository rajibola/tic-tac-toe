import {Platform, StyleSheet} from 'react-native';
import {colors, font} from '../constants';
import {getStatusBarHeight, hp, wp} from '../utils/layout';

export const IntroStyles = StyleSheet.create({
  player: {
    alignSelf: 'center',
    fontSize: hp(35),
    fontFamily: 'YanoneKaffeesatz-Regular',
    textTransform: 'lowercase',
  },
  vs: {
    ...font[1],
    lineHeight: hp(55),
    fontSize: hp(50),
    marginHorizontal: wp(4),
    letterSpacing: -wp(5),
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const HomeStyles = StyleSheet.create({
  inputContainer: {
    marginBottom: hp(200),
  },
  input: {
    borderBottomWidth: 1,
    height: hp(40),
    marginBottom: hp(20),
    ...font[1],
    fontSize: hp(25),
    lineHeight: hp(25),
    padding: 0,
  },
  buttonTitle: {
    ...font[2],
    fontSize: hp(30),
    lineHeight: hp(35),
    color: colors.white,
  },
  button: {
    position: 'absolute',
    bottom: hp(40),
    alignSelf: 'center',
    width: '100%',
    height: hp(60),
    borderRadius: wp(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  start: {
    ...font[2],
    fontSize: hp(30),
    lineHeight: hp(35),
    marginBottom: hp(200),
  },
  team: {
    color: colors.blue,
  },
  o: {
    ...font[1],
    fontSize: hp(70),
    lineHeight: hp(75),
  },
  title: {
    ...font[2],
    fontSize: hp(40),
    lineHeight: hp(50),
    paddingTop: hp(100),
    marginBottom: hp(10),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    paddingHorizontal: wp(25),
  },
});
