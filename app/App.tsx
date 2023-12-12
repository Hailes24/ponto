// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from "@expo-google-fonts/inter";
import { Loading } from "./source/components/Loading";
export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold
	});

	if (!fontsLoaded) {
		return (
			<Loading />
		);
	}

	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
