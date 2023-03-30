import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

// bringing screens
import Home from './screens/home';
import Add from './screens/add';
import Edit from './screens/edit';
//github
import GithubList from './screens/github';
import GithubInput from './screens/gitInput';

//bootstrap like
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//creating stack
const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GithubInput">
          {/* home   */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: '#0f4c75',
              },
              title: 'LCO netflix App',
              headerTitleStyle: {
                textAlign: 'center',
                color: '#00b7c2',
              },
            }}
          />
          {/* Add  */}
          <Stack.Screen
            name="Add"
            component={Add}
            options={{
              headerStyle: {
                backgroundColor: '#0f4c75',
              },
              title: 'LCO netflix App',
              headerTitleStyle: {
                textAlign: 'center',
                color: '#00b7c2',
              },
            }}></Stack.Screen>

          {/* update  */}
          <Stack.Screen
            name="Edit"
            component={Edit}
            options={{
              headerStyle: {
                backgroundColor: '#0f4c75',
              },
              title: 'LCO netflix App',
              headerTitleStyle: {
                textAlign: 'center',
                color: '#00b7c2',
              },
            }}></Stack.Screen>

          <Stack.Screen
            name="GithubInput"
            component={GithubInput}
            options={{
              headerStyle: {
                backgroundColor: '#0f4c75',
              },
              title: 'Github App',
              headerTitleStyle: {
                textAlign: 'center',
                color: '#00b7c2',
              },
            }}></Stack.Screen>

          <Stack.Screen
            name="GithubList"
            component={GithubList}
            options={({route}) => ({
              headerStyle: {
                backgroundColor: '#0f4c75',
              },
              title: `${route.params?.title}`,
              headerTitleStyle: {
                textAlign: 'center',
                color: '#00b7c2',
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
