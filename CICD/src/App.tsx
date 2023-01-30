import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import Calculator from './Calculator';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Calculator />
    </>
  );
};
