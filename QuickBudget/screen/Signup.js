/* eslint-disable prettier/prettier */
import React from 'react';
import * as native from 'native-base';
import {StyleSheet, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor('#330066');

const Signup = () => {
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
        <native.Box height="600px" justifyContent="center" width="300px">
          <native.KeyboardAvoidingView
            flex={1}
            behavior="padding"
            justifyContent="center"
            keyboardVerticalOffset={-3000}>
            <native.Text
              fontSize="40px"
              // fontWeight="bold"
              textAlign="center"
              style={styles.title}
              mb={8}
              color="white">
              Registration
            </native.Text>

            <native.Input
              width="100%"
              placeholder="Full Name"
              placeholderTextColor="gray.600"
              mb={4}
              borderRadius="30px"
              bg="rgba(245, 246, 250,0.8)"
              style={styles.shadow}
            />
            <native.Input
              width="100%"
              placeholder="E-mail"
              placeholderTextColor="gray.600"
              mb={4}
              borderRadius="30px"
              bg="rgba(245, 246, 250,0.8)"
              style={styles.shadow}
            />
            <native.Input
              width="100%"
              placeholder="Contact"
              placeholderTextColor="gray.600"
              mb={4}
              borderRadius="30px"
              bg="rgba(245, 246, 250,0.8)"
              style={styles.shadow}
            />
            <native.Input
              width="100%"
              placeholder="Create Password"
              type="password"
              placeholderTextColor="gray.600"
              mb={4}
              borderRadius="30px"
              bg="rgba(245, 246, 250,0.8)"
              style={styles.shadow}
            />
            <native.Input
              width="100%"
              placeholder="Confirm Password"
              type="password"
              placeholderTextColor="gray.600"
              mb={4}
              borderRadius="30px"
              bg="rgba(245, 246, 250,0.8)"
              style={styles.shadow}
            />
            <native.Button
              style={styles.shadow}
              bg="#6b5ff2"
              borderRadius="20px">
              Sign up
            </native.Button>
          </native.KeyboardAvoidingView>
          <native.Box>
            <native.Text
              fontSize="15px"
              fontStyle="italic"
              textAlign="center"
              color="white"
              mt={50}>
              Have an Account?
            </native.Text>
            <native.Pressable onPress={() => navigation.goBack()}>
              <native.Text
                fontSize="15px"
                fontWeight="bold"
                textAlign="center"
                color="white"
                textDecoration="underline">
                Log in
              </native.Text>
            </native.Pressable>
          </native.Box>
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

export default Signup;
