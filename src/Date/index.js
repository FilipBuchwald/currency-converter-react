import styled from "styled-components";
import { useCurrentDate } from "./useCurrentDate";

const Text = styled.text `
    font-family: 'Inconsolata', monospace;
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
`;

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