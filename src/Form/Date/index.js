import { useEffect, useState } from "react";
import "./style.css"

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
        <div>
            <p className="date">
                Dzisiaj jest {date.toLocaleString("pl",
                    {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    })}
            </p>
        </div>
    )
};