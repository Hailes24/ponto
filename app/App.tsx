// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from "@expo-google-fonts/inter";
import { Loading } from "./source/components/Loading";
import { Routes } from './source/routes';


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
		<>
			<Routes />
			<StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
		</>
	);
}

