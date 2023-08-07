import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import FriendsScreen from './screens/FriendsScreen';


const StackNavigator = () => {
    
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={SigninScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={SignupScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Friends" component={FriendsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})