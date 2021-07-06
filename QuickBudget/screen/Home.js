/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import * as native from 'native-base';
import {StatusBar} from 'react-native';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor('#330066');

const Home = () => {
  return (
    <native.NativeBaseProvider>
      <native.Image
        alt="Alternate Text"
        source={require('../asserts/home2.jpg')}
        position="absolute"
        resizeMode="cover"
        height="100%"
        width="100%"
      />
      
    </native.NativeBaseProvider>
  );
};

export default Home;
