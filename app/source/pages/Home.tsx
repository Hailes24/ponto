import React from 'react';
import { View, Text, Button } from 'react-native';
import { Header } from '../components/Header';


export function Home() {
	return (
		<View className='flex-1 bg-black'>
			<Header></Header>
			<Text >Hailes Mauricio 🚀</Text>
			{/* <Button title='haiels' >Hailes</Button> */}
		</View>
	);
}