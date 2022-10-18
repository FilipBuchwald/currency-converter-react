import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {

    const [rates, setRates] = useState([]);
  
    useEffect(() => {
        axios.get("https://api.exchangerate.host/latest?base=PLN")
        .then(response => {
            setRates(response.data.rates);
        })
    },[]);
    
    return rates;
};