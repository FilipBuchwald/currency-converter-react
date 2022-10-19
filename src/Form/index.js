import { useState } from "react";
import { useRatesData } from "./useRateData";
import { Result } from "./Result";
import { StyledForm, Fieldset, Legend, Input, Select, Button } from "./styled";

const Form = () => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const onSelectChange = ({ target }) => setCurrency(target.value);


  const ratesData = useRatesData();
  console.log(ratesData);

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      targetAmount: amount * rate,
      currency,
    });
  };

  return (
    <StyledForm
      onSubmit={onFormSubmit}
    >
      <Fieldset>
        <Legend>Kalkulator</Legend>
        <div>
          <label>
            <span>
              Kwota w zł:
            </span>
            <Input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Wpisz kwotę"
              required
              autoFocus
            />
          </label>
        </div>

        <div>
          <label>
            Chcę otrzymać:
            <Select
              value={currency}
              onChange={onSelectChange}
            >
              {ratesData.rates && Object.keys(ratesData.rates).map((currency => (
                <option
                  key={currency}
                  value={currency}
                >
                  {currency}
                </option>
              )))}
            </Select>
          </label>
        </div>
        <Button className="form__button ">Przelicz</Button>
        <Result result={result} />
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
