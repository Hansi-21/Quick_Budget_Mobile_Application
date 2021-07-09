/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import * as native from 'native-base';
import {StatusBar, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
import Pie from 'react-native-pie';
import {useNavigation} from '@react-navigation/native';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor('#330066');

const Home = () => {
  const navigation = useNavigation();
  const [changeview, setchangeview] = useState(true);

  let [category, setCategory] = React.useState('');
  let [month, setMonth] = React.useState('');

  return (
    <native.NativeBaseProvider>
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
          ml={3}
          w="80%"
          fontFamily="SummerInCalifornia">
          Quick Budget
        </native.Text>

        <native.Menu
          trigger={triggerProps => {
            return (
              <native.Pressable
                accessibilityLabel="More options menu"
                {...triggerProps}>
                <native.HamburgerIcon />
                {/* <Feather name="menu" size="20" color="white" /> */}
              </native.Pressable>
            );
          }}>
          <native.Menu.Item
            onPress={() => {
              navigation.navigate('AllDetails');
            }}>
            Income & Expenses Details
          </native.Menu.Item>

          <native.Menu.Item>My Phofile</native.Menu.Item>
          <native.Menu.Item>Setting</native.Menu.Item>
          <native.Divider />
          <native.Menu.Item>Logout</native.Menu.Item>
        </native.Menu>
      </native.HStack>
      <native.View mt={10} flexDirection="row" justifyContent="space-around">
        <native.Box justifyContent="center" alignItems="center">
          <native.Text fontWeight="bold" fontSize="20px" position="absolute">
            80%
          </native.Text>
          <Pie
            radius={60}
            innerRadius={50}
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
            20%
          </native.Text>
          <Pie
            radius={60}
            innerRadius={50}
            sections={[
              {
                percentage: 20,
                color: '#d63031',
              },
            ]}
            backgroundColor="#ddd"
          />
        </native.Box>
        <native.Box justifyContent="center" alignItems="center">
          <native.Text fontWeight="bold" fontSize="20px" position="absolute">
            60%
          </native.Text>
          <Pie
            radius={60}
            innerRadius={50}
            sections={[
              {
                percentage: 60,
                color: '#079992',
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
        <native.Text fontFamily="SummerInCalifornia" fontSize="25px">
          Balance
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
                placeholder="Income"
                placeholderTextColor="gray.600"
                mb={4}
                borderRadius="30px"
                bg="rgba(245, 246, 250,0.8)"
                style={styles.shadow}
              />

              <native.VStack alignItems="center" space={4}>
                <native.Select
                  selectedValue={month}
                  minWidth={200}
                  accessibilityLabel="Select Month"
                  placeholder="Select Catogery"
                  onValueChange={itemValue => setMonth(itemValue)}
                  _selectedItem={{
                    bg: 'cyan.600',
                    endIcon: <native.CheckIcon size={4} />,
                  }}>
                  <native.Select.Item label="January" value="january" />
                  <native.Select.Item label="February" value="february" />
                  <native.Select.Item label="March" value="march" />
                  <native.Select.Item label="April" value="april" />
                  <native.Select.Item label="May" value="may" />
                  <native.Select.Item label="June" value="june" />
                  <native.Select.Item label="July" value="july" />
                  <native.Select.Item label="Augest" value="augest" />
                  <native.Select.Item label="September" value="september" />
                  <native.Select.Item label="October" value="october" />
                  <native.Select.Item label="November" value="november" />
                  <native.Select.Item label="December" value="december" />
                </native.Select>
              </native.VStack>
              <native.Button
                style={styles.shadow}
                bg="#6b5ff2"
                borderRadius="20px"
                width="40%"
                mx="auto"
                mt={5}>
                Save
              </native.Button>
            </native.KeyboardAvoidingView>
          </native.Box>
        ) : (
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
                Input Expenses
              </native.Text>
              <native.Input
                width="100%"
                placeholder="Expense"
                placeholderTextColor="gray.600"
                mb={4}
                borderRadius="30px"
                bg="rgba(245, 246, 250,0.8)"
                style={styles.shadow}
              />

              <native.VStack alignItems="center" space={4}>
                <native.Select
                  selectedValue={category}
                  minWidth={200}
                  accessibilityLabel="Select Catogery"
                  placeholder="Select Catogery"
                  onValueChange={itemValue => setCategory(itemValue)}
                  _selectedItem={{
                    bg: 'cyan.600',
                    endIcon: <native.CheckIcon size={4} />,
                  }}>
                  <native.Select.Item label="Foods" value="food" />
                  <native.Select.Item label="Bills" value="bills" />
                  <native.Select.Item label="Health" value="health" />
                  <native.Select.Item label="Tax" value="tax" />
                  <native.Select.Item label="Repeir" value="repeir" />
                  <native.Select.Item label="Extra" value="extra" />
                </native.Select>
              </native.VStack>

              <native.Button
                style={styles.shadow}
                borderRadius="20px"
                bg="#6b5ff2"
                width="40%"
                mx="auto"
                mt={5}>
                Save
              </native.Button>
            </native.KeyboardAvoidingView>
          </native.Box>
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
            bg="#d63031"
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
