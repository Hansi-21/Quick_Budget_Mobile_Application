/* eslint-disable prettier/prettier */
import React from 'react';
import 'react-native-gesture-handler';
import Main from './screen/Main';
import Login from './screen/Login';
import Signup from './screen/Signup';
import ResetPassword from './screen/ResetPassword';
import CheckEmail from './screen/CheckEmail';
import NewPassword from './screen/NewPassword';
import Home from './screen/Home';
import AllDetails from './screen/Income&Expenses';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AllDetails" component={AllDetails} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="CheckEmail" component={CheckEmail} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
