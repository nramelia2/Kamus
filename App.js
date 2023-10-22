import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import screenOne from './src/screens/screenOne';
import Home from './src/screens/Home';
import bahasaMadya from './src/screens/bahasaMadya';
import tigaNgoko from './src/screens/tigaNgoko';
import Detail from './src/screens/Detail';
import About from './src/screens/About';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='screenOne'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='screenOne' component={screenOne} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='bahasaMadya' component={bahasaMadya} />
        <Stack.Screen name='tigaNgoko' component={tigaNgoko} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='About' component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;