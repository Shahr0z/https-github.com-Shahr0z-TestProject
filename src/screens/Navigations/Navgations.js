import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RestPinOne from '../Reset PIN/ScreenOne/RestPinOne';
import RestPinTwo from '../Reset PIN/ScreenTwo/RestPinTwo';
import RestPinThree from '../Reset PIN/ScreenThree/RestPinThree';

export default function Navgations() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'RestPinOne'}>
                <Stack.Screen
                    name="RestPinOne"
                    component={RestPinOne}
                />
                <Stack.Screen
                    name="RestPinTwo"
                    component={RestPinTwo}
                />
                <Stack.Screen
                    name="RestPinThree"
                    component={RestPinThree}
                />
            </Stack.Navigator>
        </NavigationContainer >
    )
}
