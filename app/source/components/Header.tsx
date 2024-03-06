import { View, Image, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import colors from "tailwindcss/colors";

export function Header() {

	const { navigate } = useNavigation();

	return (
		<View className='w-full flex-row items-center justify-between'>
			<TouchableOpacity
				activeOpacity={0.7}
				className='flex-row h-14 p-4 border border-blue-500 rounded-lg items-center'
				onPress={() => navigate("statistics")}
			>
				<FontAwesome name='pie-chart' color={'#3D70FF'} size={20} />
				<Text className='text-appblack ml-3 font-semibold text-base'>Estatistica</Text>
			</TouchableOpacity>
			<Image source={require('../../assets/favicon.png')} ></Image>
		</View>
	);
}