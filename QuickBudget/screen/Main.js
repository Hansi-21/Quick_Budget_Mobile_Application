/* eslint-disable prettier/prettier */
import React from 'react';
import * as native from 'native-base';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor('#330066');

const Main = () => {
  const navigation = useNavigation();

  return (
    <native.NativeBaseProvider>
      <native.Image
        alt="Alternate Text"
        source={require('../asserts/2.jpg')}
        position="absolute"
        resizeMode="cover"
        height="100%"
        width="100%"
      />
      <native.Center flex={1}>
        <native.Text
          textAlign="center"
          fontSize="50px"
          fontFamily="PerpectBrightDemoRegular"
          color="white">
          QUICK BUDGET
        </native.Text>

        <native.Text
          mt={6}
          textAlign="center"
          fontSize="30px"
          fontFamily="SummerInCalifornia"
          color="white"
          ml={5}>
          Join with us for tracking and managing your income and expenses
        </native.Text>
      </native.Center>

      <native.Box w="100%" position="absolute" bottom={20}>
        <native.Button
          borderRadius="60px"
          margin="auto"
          w="70%"
          h="60px"
          bg="#ffffff"
          fontSize="20px"
          // fontWeight="bold"
          fontFamily="SummerInCalifornia"
          onPress={() => navigation.navigate('Login')}>
          GET STARTED
        </native.Button>
      </native.Box>
    </native.NativeBaseProvider>
  );
};

export default Main;
