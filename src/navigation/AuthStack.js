import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';
import SearchScreen from '../screens/SearchScreen';

const Auth = createStackNavigator();

export default function AuthStack() {
	return (
		<Auth.Navigator>
			<Auth.Screen
				name="SignInWelcomeScreen"
				component={SignInWelcomeScreen}
				options={{
					headerShown: false,
					...TransitionPresets.RevealFromBottomAndroid
				}}
			/>
			<Auth.Screen
				name="SignInScreen"
				component={SignInScreen}
				options={{
					headerShown: false,
					...TransitionPresets.RevealFromBottomAndroid
				}}
			/>			
			<Auth.Screen
				name="DrawerNavigator"
				component={DrawerNavigator}
				options={{
					headerShown: false,
					...TransitionPresets.RevealFromBottomAndroid
				}}
			/>
			<Auth.Screen
				name="RestaurantsMapScreen"
				component={RestaurantsMapScreen}
				options={{
					headerShown: false,
					...TransitionPresets.RevealFromBottomAndroid
				}}
			/>
		</Auth.Navigator>
	)
};