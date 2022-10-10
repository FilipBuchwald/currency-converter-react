import { useEffect, useState } from "react";
import styled from "styled-components";

const Text = styled.text `
    font-family: 'Inconsolata', monospace;
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
`;

export const DateTime = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    });

    return (
        <Text className="date">
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