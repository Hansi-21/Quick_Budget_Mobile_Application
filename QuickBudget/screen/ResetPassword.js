/* eslint-disable prettier/prettier */
import React from 'react';
import * as native from 'native-base';
import {StatusBar, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor('#330066');

const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <native.NativeBaseProvider>
      <native.Center flex={1} bg="white">
        <native.Image
          alt="Alternate Text"
          source={require('../asserts/2.jpg')}
          position="absolute"
          resizeMode="cover"
          height="100%"
          width="100%"
        />
        <native.Box height="600px" width="300px">
          <native.KeyboardAvoidingView
            flex={1}
            behavior="padding"
            justifyContent="center"
            // keyboardVerticalOffset={500}
          >
            <native.Text
              fontSize="40px"
              textAlign="center"
              style={styles.title}
              mb={8}
              color="white">
              Reset Password
            </native.Text>

            <native.Text
              fontSize="15px"
              textAlign="center"
              mb={8}
              color="white"
              fontFamily="OtomanopeeOne-Regular">
              Enter the Email associated with your account and we will send an
              email with instruction to reset password.
            </native.Text>

            <native.Input
              width="100%"
              placeholder="E-mail"
              placeholderTextColor="gray.600"
              mb={4}
              borderRadius="30px"
              bg="rgba(245, 246, 250,0.8)"
              style={styles.shadow}
            />

            <native.Button
              style={styles.shadow}
              bg="#6b5ff2"
              borderRadius="20px"
              onPress={() => navigation.navigate('CheckEmail')}>
              Send Instructions
            </native.Button>
          </native.KeyboardAvoidingView>
        </native.Box>
      </native.Center>
    </native.NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16.0,

    elevation: 8,
  },
  title: {
    fontFamily: 'PerpectBrightDemoRegular',
  },
});

export default ResetPassword;
