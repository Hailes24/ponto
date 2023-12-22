import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "../pages/Home";
import { Statistic } from '../pages/Statistic';

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
			<Stack.Screen name="statistic" component={Statistic} />
		</Stack.Navigator>
	);
};

