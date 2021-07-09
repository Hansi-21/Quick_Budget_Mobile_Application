/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import * as native from 'native-base';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {launchMailApp} from "@react-native-mail-launcher";

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
          Check Email
        </native.Text>

        <native.Text
          mt={6}
          textAlign="center"
          fontSize="15px"
          fontFamily="OtomanopeeOne-Regular"
          color="white"
          ml={5}>
          Join with us for tracking and managing your income and expenses
        </native.Text>

        <native.Button
          borderRadius="60px"
          mt={4}
          w="50%"
          h="50px"
          bg="#ffffff"
          fontSize="20px"
          // fontWeight="bold"
          fontFamily="SummerInCalifornia"
          // onPress={launchMailApp}
        >
          Open Email App
        </native.Button>
      </native.Center>

      <native.Box w="100%" position="absolute" bottom={10}>
        <native.Text
          fontSize="12px"
          textAlign="center"
          mb={8}
          color="white"
          fontFamily="OtomanopeeOne-Regular">
          Enter the Email associated with your account and we will send an email
          with instruction to reset password.
        </native.Text>
      </native.Box>
    </native.NativeBaseProvider>
  );
};

export default Main;
