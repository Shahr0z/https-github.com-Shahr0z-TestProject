import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PasswordScreen from './first way/PasswordScreen'
import TimerScreen from './first way/TimerScreen'

export default function Navigations() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='PasswordScreen' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='PasswordScreen' component={PasswordScreen} />
                <Stack.Screen name='TimerScreen' component={TimerScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}