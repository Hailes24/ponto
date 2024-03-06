import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Text, Dimensions } from "react-native";

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;
export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5);

interface Props {
	isPast: boolean;
	day?: Date;
}

enum Month {
	Jan,
	Fev,
	Mar,
	Abr,
	Mai,
	Jun,
	Jul,
	Ago,
	Set,
	Out,
	Nov,
	Dez
}

function getMonthAbv(index: Month) {
	switch (index) {
		case Month.Jan: return "Jan";
		case Month.Fev: return "Fev";
		case Month.Mar: return "Mar";
		case Month.Abr: return "Abr";
		case Month.Mai: return "Mai";
		case Month.Jun: return "Jun";
		case Month.Jul: return "Jul";
		case Month.Ago: return "Ago";
		case Month.Set: return "Set";
		case Month.Out: return "Out";
		case Month.Nov: return "Nov";
		case Month.Dez: return "Dez";
		default: return Month.Jan;
	}
}

export function WorkDay({ isPast, day }: Props) {


	const { navigate } = useNavigation();

	return (
		<>
			{
				isPast
					?
					<TouchableOpacity
						className="bg-appblue rounded-lg m-1"
						style={{ width: DAY_SIZE, height: DAY_SIZE }}
						activeOpacity={0.7}
						onPress={() => navigate("insert")}
					>
						<Text className="text-appwhite text-xs align-middle text-center justify-center">{day?.getDate() + "\n" + getMonthAbv(day?.getMonth() as Month)}</Text>
					</TouchableOpacity>
					:
					<View
						className="bg-appbluelight rounded-lg m-1"
						style={{ width: DAY_SIZE, height: DAY_SIZE }}
					>
						<Text className="text-appwhite">{day?.getDate()}</Text>
					</View>
			}
		</>
	);
}