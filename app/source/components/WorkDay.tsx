import { TouchableOpacity, View, Text, Dimensions } from "react-native";

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;
export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5);

interface Props {
	isPast: boolean;
	day?: Date;
}
export function WorkDay({ isPast, day }: Props) {
	return (
		<>
			{
				isPast
					?
					<TouchableOpacity
						className="bg-appblue rounded-lg border-2 m-1 border-zinc-800"
						style={{ width: DAY_SIZE, height: DAY_SIZE }}
						activeOpacity={0.7}
					>
						<Text className="text-appwhite text-xs">{day?.getDate()} + {day?.getMonth()}</Text>
					</TouchableOpacity>
					:
					<View
						className="bg-appbluelight rounded-lg border-2 m-1 border-zinc-800 opacity-40"
						style={{ width: DAY_SIZE, height: DAY_SIZE }}
					>
						<Text className="text-appwhite">{day?.getDate()}</Text>
					</View>
			}
		</>
	);
}