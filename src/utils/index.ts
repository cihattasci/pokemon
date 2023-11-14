import {Dimensions} from 'react-native';
import Toast from 'react-native-toast-message';

export const metrics = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  blue: '#21206C',
  blueThin: '#114070',
  shadowBlue: '#3230BF',
  gray: '#C3C1C1',
  faded: '#9F9EE1',
  green: '#38BF09',
};

export const showToast = (type: string, text1: string, text2: string) => {
  Toast.show({
    type,
    position: 'bottom',
    text1,
    text2,
  });
};

