/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import * as native from 'native-base';
import {StatusBar, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor('#330066');

const Home = () => {
  const navigation = useNavigation();
  const [changeview, setchangeview] = useState(true);
  let [category, setCategory] = React.useState('');
  let [year, setYear] = React.useState('');

  const data = [
    {
      id: '1',
      title: 'January',
    },
    {
      id: '2',
      title: 'Febuary',
    },
    {
      id: '3',
      title: 'March',
    },
    {
      id: '4',
      title: 'April',
    },
    {
      id: '5',
      title: 'May',
    },
    {
      id: '6',
      title: 'June',
    },
    {
      id: '7',
      title: 'July',
    },
    {
      id: '8',
      title: 'Auguest',
    },
    {
      id: '9',
      title: 'September',
    },
    {
      id: '10',
      title: 'October',
    },
    {
      id: '11',
      title: 'November',
    },
    {
      id: '12',
      title: 'December',
    },
  ];

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
        {/* <native.Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon name="home" size={30} color="white" />
        </native.Pressable> */}
        <native.Text
          color="white"
          fontSize={40}
          ml={2}
          w="80%"
          fontFamily="SummerInCalifornia">
          Income & Expense Details
        </native.Text>

        <native.Menu
          trigger={triggerProps => {
            return (
              <native.Pressable
                accessibilityLabel="More options menu"
                {...triggerProps}>
                <native.HamburgerIcon />
              </native.Pressable>
            );
          }}>
          <native.Menu.Item
            onPress={() => {
              navigation.navigate('Home');
            }}>
            Home
          </native.Menu.Item>
          <native.Menu.Item>My Phofile</native.Menu.Item>
          <native.Menu.Item>Setting</native.Menu.Item>
          <native.Divider />
          <native.Menu.Item onPress={() => {}}>Logout</native.Menu.Item>
        </native.Menu>
      </native.HStack>

      {changeview ? (
        <native.VStack>
          <native.Select
            selectedValue={year}
            minWidth={150}
            accessibilityLabel="year"
            placeholder="Year"
            onValueChange={itemValue => setYear(itemValue)}
            _selectedItem={{
              bg: 'cyan.600',
              endIcon: <native.CheckIcon size={4} />,
            }}>
            <native.Select.Item label="2021" value="2021" />
            <native.Select.Item label="2020" value="2020" />
            <native.Select.Item label="2019" value="2019" />
            <native.Select.Item label="2018" value="2018" />
          </native.Select>
        </native.VStack>
      ) : (
        <native.Flex flexDirection="row" justifyContent="space-around">
          <native.VStack alignItems="center" space={4}>
            <native.Select
              selectedValue={year}
              minWidth={150}
              accessibilityLabel="year"
              placeholder="Year"
              onValueChange={itemValue => setYear(itemValue)}
              _selectedItem={{
                bg: 'cyan.600',
                endIcon: <native.CheckIcon size={4} />,
              }}>
              <native.Select.Item label="2021" value="2021" />
              <native.Select.Item label="2020" value="2020" />
              <native.Select.Item label="2019" value="2019" />
              <native.Select.Item label="2018" value="2018" />
            </native.Select>
          </native.VStack>
          <native.VStack alignItems="center" space={4}>
            <native.Select
              selectedValue={category}
              minWidth={150}
              accessibilityLabel="catogery"
              placeholder="Catogery"
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
        </native.Flex>
      )}

      <native.Center>
        {changeview ? (
          <native.FlatList
            mt={2}
            data={data}
            renderItem={({item}) => (
              <native.Box px={40} py={2} rounded="md" my={2} bg="#bdc3c7">
                {item.title}
              </native.Box>
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <native.FlatList
            mt={2}
            data={data}
            renderItem={({item}) => (
              <native.Box px={40} py={2} rounded="md" my={2} bg="#95a5a6">
                {item.title}
              </native.Box>
            )}
            keyExtractor={item => item.id}
          />
        )}
      </native.Center>

      <native.Center flex={1}>
        <native.Box flexDirection="row" position="absolute" bottom={5}>
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
