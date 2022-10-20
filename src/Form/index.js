import { useState } from "react";
import { useRatesData } from "./useRateData";
import { Result } from "./Result";
import { StyledForm, Fieldset, Input, Select, Button, Loading, Error, Info, StyledHeader, Wrapper, Text } from "./styled";
import { DateTime } from "../Date";


const Form = () => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const onSelectChange = ({ target }) => setCurrency(target.value);

  const ratesData = useRatesData();

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
        <DateTime />
        <StyledHeader>
          Kalkulator walut
        </StyledHeader>

        {ratesData.state === "loading"
          ? (
            <Loading>
              Proszę czekać, trwa ładowanie kursów walut.
            </Loading>
          )
          : (ratesData.state === "error" ? (
            <Error>
              Wystąpił błąd, spróbuj ponowanie.
            </Error>
          ) : (
            <>
              <div>
                <Wrapper>
                  <Text>
                    Kwota w zł:
                  </Text>
                  <Input
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    placeholder="Wpisz kwotę"
                    required
                    autoFocus
                    type="number"
                  />
                </Wrapper>
              </div>

              <div>
                <Wrapper>
                  <Text>
                    Chcę otrzymać:
                  </Text>
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
                </Wrapper>
              </div>
              <Button className="form__button ">Przelicz</Button>
              <Result result={result} />
              <Info>
                Kursy walut pochodza z dnia {ratesData.date}
              </Info>
            </>
          ))
        }
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
