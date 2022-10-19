import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [rates, setRates] = useState(
        {state: "loading"}
        // []
        );
   
    useEffect(() => {
        const requestRateData = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                
                console.log(response);
                
                const { rates, date } =  response.data
    
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
                console.log(error);
            }
        };
        // axios.get("https://api.exchangerate.host/latest?base=PLN")
        // .then(response => {
        //     setRates(response.data.rates);


        setTimeout(requestRateData, 2000);

    }, []);

    return rates;
};