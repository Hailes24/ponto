// import React from 'react';
// import { View, Text } from 'react-native';
// import { Header } from '../components/Header';
// import { BackButton } from '../components/BackButtom';

// export function Statistic() {
// 	return (
// 		<View className='flex-1 bg-appwhite p-8 pt-16'>
// 			<BackButton />
// 			<Text className='text-orange-500'>Hailes Mauricio</Text>
// 		</View>
// 	);
// }


import React, { useState } from 'react'
import {
	ScrollView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Alert
} from 'react-native'
import { BackButton } from '../components/BackButtom';
import Checkbox from '../components/CheckBox'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
//import { api } from '../../lib/axios'

const availableWeekDays = [
	'Entrada',
	'Entrada p/ almoço',
	'Saida p/ almoço',
	'Saida'
]

export function Statistic() {
	const [title, setTitle] = useState('')
	const [weekDays, setWeekDays] = useState<number[]>([])

	const handleToggleWeekDay = (weekDayIndex: number) => {
		if (weekDays.includes(weekDayIndex)) {
			setWeekDays((prevState) =>
				prevState.filter((weekDay) => weekDay !== weekDayIndex)
			)
		} else {
			setWeekDays((prevState) => [...prevState, weekDayIndex])
		}
	}

	const handleSubmit = async () => {
		if (!title || weekDays.length === 0) {
			Alert.alert(
				'Atenção',
				'Informe um nome e ao menos um dia de recorrência.'
			)
			return
		}

		// await api.post('/habits', {
		//   title,
		//   weekDays
		// })

		setTitle('')
		setWeekDays([])

		Alert.alert('Parabéns', 'Hábito criado com sucesso!')
	}

	return (
		<View className="flex-1 px-8 pt-16 bg-dark">
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 100 }}>
				<BackButton />
				<Text className="mt-6 text-3xl font-extrabold text-appblack">
					Ponto Diario
				</Text>

				<Text className="mt-4 mb-3 text-base font-semibold text-appblack">
					Marque os eventos
				</Text>

				{availableWeekDays.map((weekDay, index) => (
					<Checkbox
						onPress={() => handleToggleWeekDay(index)}
						checked={weekDays.includes(index)}
						title={weekDay}
						key={weekDay}
					/>
				))}

				<Text className="mt-6 text-base font-semibold text-appblack">
					Observação:
				</Text>
				<TextInput
					className="h-12 pl-4 mt-3 text-appblack border-2 rounded-lg bg-appwhitelow border-appbluelight focus:border-appblue "
					placeholderTextColor={colors.zinc[400]}
					placeholder="Nota explicativa"
					value={title}
					onChangeText={setTitle}
				/>

				<TouchableOpacity
					onPress={handleSubmit}
					className="flex-row items-center justify-center w-full mt-6 bg-appblue rounded-md h-14"
					activeOpacity={0.7}>
					<Feather name="check" color={colors.white} size={20}></Feather>
					<Text className="ml-2 text-base font-semibold text-white">
						Confirmar
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	)
}

