/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import * as native from 'native-base';
import {StatusBar, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pie from 'react-native-pie';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor('#330066');

const Home = () => {
  const [changeview, setchangeview] = useState(true);

  return (
    <native.NativeBaseProvider>
      {/* <native.Image
        alt="Alternate Text"
        source={require('../asserts/home2.jpg')}
        position="absolute"
        resizeMode="cover"
        height="100%"
        width="100%"
      /> */}
      <native.HStack
        bg="#4e0188"
        px={5}
        py={3}
        h={20}
        justifyContent="space-between"
        alignItems="center">
        <Icon name="home" size={30} color="white" />
        <native.Text
          color="white"
          fontSize={40}
          w="80%"
          fontFamily="SummerInCalifornia">
          Quick Budget
        </native.Text>
        <Icon name="ellipsis-v" size={25} color="white" />
      </native.HStack>
      <native.View mt={10} flexDirection="row" justifyContent="space-around">
        <native.Box justifyContent="center" alignItems="center">
          <native.Text fontWeight="bold" fontSize="20px" position="absolute">
            80%
          </native.Text>
          <Pie
            radius={80}
            innerRadius={70}
            sections={[
              {
                percentage: 80,
                color: '#4B0085',
              },
            ]}
            backgroundColor="#ddd"
          />
        </native.Box>
        <native.Box justifyContent="center" alignItems="center">
          <native.Text fontWeight="bold" fontSize="20px" position="absolute">
            40%
          </native.Text>
          <Pie
            radius={80}
            innerRadius={70}
            sections={[
              {
                percentage: 40,
                color: '#15C7D1',
              },
            ]}
            backgroundColor="#ddd"
          />
        </native.Box>
      </native.View>
      <native.View flexDirection="row" mt={3} justifyContent="space-around">
        <native.Text fontFamily="SummerInCalifornia" fontSize="25px">
          Income
        </native.Text>
        <native.Text fontFamily="SummerInCalifornia" fontSize="25px">
          Expenses
        </native.Text>
      </native.View>

      <native.Center>
        {changeview ? (
          <native.Box height="600px" justifyContent="center" width="300px">
            <native.KeyboardAvoidingView
              bottom={90}
              flex={1}
              behavior="padding"
              justifyContent="center">
              <native.Text
                fontSize="40px"
                textAlign="center"
                fontFamily="SummerInCalifornia"
                mb={8}
                color="#4B0085">
                Input Income
              </native.Text>
              <native.Input
                width="100%"
                placeholder="Income this Month"
                placeholderTextColor="gray.600"
                mb={4}
                borderRadius="30px"
                bg="rgba(245, 246, 250,0.8)"
                style={styles.shadow}
              />
              <native.Input
                width="100%"
                placeholder="Select Month"
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
                width="40%"
                mx="auto">
                Save
              </native.Button>
            </native.KeyboardAvoidingView>
          </native.Box>
        ) : (
          <native.Text>Change</native.Text>
        )}
      </native.Center>

      <native.Center flex={1}>
        <native.Box flexDirection="row" position="absolute" bottom={20}>
          <native.Button
            bg="#4B0085"
            h="60px"
            margin="auto"
            borderRadius="50px"
            w="175px"
            startIcon={<Icon name="dollar" size={20} color="white" />}
            onPress={() => {
              setchangeview(true);
            }}>
            INCOME
          </native.Button>
          <native.Button
            ml={3}
            w="175px"
            h="60px"
            borderRadius="50px"
            startIcon={<Icon name="arrow-down" size={20} color="white" />}
            onPress={() => {
              setchangeview(false);
            }}>
            EXPENSES
          </native.Button>
        </native.Box>
      </native.Center>
    </native.NativeBaseProvider>
  );
};

export default Home;

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
});
