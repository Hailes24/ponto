import { View, Image, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
// import colors from "tailwindcss/colors";

export function Header() {
	return (
		<View className='w-full flex-row items-center justify-between'>
			<TouchableOpacity activeOpacity={0.7} className='flex-row h-11 p-4 border border-blue-500 rounded-lg items-center'>
				<FontAwesome name='share-square-o' color={'#3D70FF'} size={20} />
				<Text className='text-appblack ml-3 font-semibold text-base'>Partilhar</Text>
			</TouchableOpacity>
			<Image source={require('../../assets/favicon.png')} ></Image>
		</View>
	);
}