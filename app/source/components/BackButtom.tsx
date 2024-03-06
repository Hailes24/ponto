import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export function BackButton() {

	const { goBack } = useNavigation();

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={() => goBack()}
		>
			<Ionicons
				name='arrow-back'
				size={32}
				color={'#282A31'}
			/>
		</TouchableOpacity>
	);
}