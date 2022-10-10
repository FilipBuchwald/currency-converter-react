import { useState } from "react";
import currencyBase from "./currencyBase";
import { Result } from "./Result";
import { StyledForm, Fieldset, Legend, Input, Select, Button } from "./styled";

const Form = ({ result, calculateResult }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencyBase[0].name);
    const onSelectChange = ({ target }) => setCurrency(target.value);

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
                            {currencyBase.map((currency => (
                                <option
                                    key={currency.name}
                                    value={currency.name}
                                >
                                    {currency.name}
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