import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "../pages/Home";
import { Insert } from '../pages/Insert';
import { Statistics } from '../pages/Statistics';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="home"
				component={Home}
				options={
					{
						//headerLeft: null,
						gestureEnabled: false,
					}
				}
			/>
			<Stack.Screen name="insert" component={Insert} />
			<Stack.Screen name="statistics" component={Statistics} />
		</Stack.Navigator>
	);
};

