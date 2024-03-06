import React from 'react'
import {
	TouchableOpacity,
	View,
	Text,
	TouchableOpacityProps
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated'

type CheckboxProps = TouchableOpacityProps & {
	checked?: boolean
	title: string
}

export default function Checkbox({ checked = false, title, ...props }: CheckboxProps) {
	return (
		<TouchableOpacity
			{...props}
			activeOpacity={0.7}
			className="flex-row items-center mb-2">
			{checked ? (
				<Animated.View
					entering={ZoomIn}
					exiting={ZoomOut}
					className="items-center justify-center w-8 h-8 bg-appblue rounded-lg">
					<Feather name="check" size={20} color={colors.white}></Feather>
				</Animated.View>
			) : (
				<View className="items-center justify-center w-8 h-8 rounded-lg bg-appbluelight" />
			)}
			<View className='flex-row justify-between'>
				<Text className="ml-3 text-base justify-center font-semibold text-appblack">{title} </Text>
				{checked && <Text className="text-base font-light text-appblack"> ⌚ 08:31 </Text>}
			</View>
		</TouchableOpacity>
	)
}
