import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [rates, setRates] = useState({ state: "loading" });

    useEffect(() => {
        const requestRateData = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");

                const { rates, date } = response.data;

                setRates({
                    rates,
                    date,
                    state: "success",
                });

            }
            catch (error) {
                setRates({
                    state: "error",
                });
            }
        };
        setTimeout(requestRateData, 2000);
    }, []);

    return rates;
};
