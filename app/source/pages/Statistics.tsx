
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { BackButton } from '../components/BackButtom';
import ProgressBar from '../components/ProgressBar';
import Checkbox from '../components/CheckBox';


export interface IPossibleHabit {
	id: string
	title: string
	created_at: string
}

export function Statistics() {
	const [possibleHabits, setPossibleHabits] = useState<IPossibleHabit[]>([])
	const [completedHabits, setCompletedHabits] = useState<string[]>([])
	//const isPast = dayjs(date).endOf('day').isBefore(new Date());
	const isPast = false;

	return (
		<View className="flex-1 px-8 pt-16 bg-dark">
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 100 }}>
				<View>
					<BackButton />
					<Text className="mt-6 text-base font-semibold lowercase text-zinc-400">
						{/* {dayOfWeek} */}
						Sexta-feirra
					</Text>
					<Text className="text-3xl font-extrabold text-appblack">
						{/* {dayAndMonth} */}
						14/02
					</Text>
					{/* <ProgressBar progress={completedPercentage} /> */}
					<ProgressBar progress={66} />

					<View className="mt-6">
						{possibleHabits?.map((habit) => {
							return (
								<Checkbox
									disabled={isPast}
									key={habit.id}
									title={habit.title}
									//onPress={() => handleToggleHabit(habit.id)}
									checked={completedHabits?.includes(habit.id)}></Checkbox>
							)
						})}

						{possibleHabits?.length ? null : (
							<Text className="text-zinc-400">
								Nenhum hábito cadastro para este dia 🤔
								{/* <Text
									className="text-base underline text-violet-400 active:text-violet-500"
								//onPress={() => navigate('new-habit')}
								>
									comece cadastrando um.
								</Text> */}
							</Text>
						)}
					</View>
				</View>
			</ScrollView>
		</View>
	);
}