import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/Header';
import { BackButton } from '../components/BackButtom';

export function Statistic() {
	return (
		<View className='flex-1 bg-appwhite p-8 pt-16'>
			<BackButton />
			<Text className='text-orange-500'>Hailes Mauricio</Text>
		</View>
	);
}