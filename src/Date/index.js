import { useCurrentDate } from "./useCurrentDate";
import { Text } from "./styled";

export const DateTime = () => {

    const date = useCurrentDate();

    return (
        <Text>
            Dzisiaj jest {date.toLocaleString("pl",
                {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                })}
        </Text>
    )
};