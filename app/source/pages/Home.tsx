import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { DAY_SIZE, WorkDay } from "../components/WorkDay";
import { generateDays } from "../utils/generate-days";

const allDaysOfYear: Date[] = generateDays();
const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
// const minimusSumaryDatesSizes = 18 * 7;
const amountOfDaysToFill = daysRemainingInYear(allDaysOfYear[allDaysOfYear.length - 1]);

function daysRemainingInYear(date: Date): number {
	const endOfYear: Date = new Date(date.getFullYear(), 11, 31);

	//? Calculates the difference in milliseconds and converts to days
	const differenceInMilliseconds: number = endOfYear.getTime() - date.getTime();
	const differenceInDays: number = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));

	return differenceInDays;
}

export function Home() {
	console.log(amountOfDaysToFill);

	return (
		<View className='flex-1 bg-appwhite p-8 pt-16'>
			<Header />
			<View className='flex-row mt-6 mb-2'>
				{
					weekDays.map((weekDay, index) => (
						<Text
							key={`${weekDay}-${index}`}
							className='text-appblack text-xl font-bold text-center mx-1'
							style={{ width: DAY_SIZE }}
						>
							{weekDay}
						</Text>
					))
				}
			</View>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

				<View className='flex-row flex-wrap'>
					{
						allDaysOfYear.map((day) => (
							<WorkDay key={day.toISOString()} />
						))
					}

					{
						amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, index) => (
							<View
								className="bg-appbluelight rounded-lg border-2 m-1 border-zinc-800 opacity-40"
								style={{ width: DAY_SIZE, height: DAY_SIZE }}
							/>
						))
					}
				</View>
			</ScrollView>

		</View>
	);
}