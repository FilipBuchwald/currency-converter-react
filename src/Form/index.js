import { useState } from "react";
import "./style.css"
import { currencyBase } from "./CurrencyBase";
import { Result } from "./Result";

const Form = ({result, calculateResult}) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencyBase[0].name);
    const onSelectChange = ({ target }) => setCurrency(target.value);

    return (
        <form
            className="form js-form"
            onSubmit={onFormSubmit}
        >
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator</legend>
                <div>
                    <label>
                        <span>
                            Kwota w zł:
                        </span>
                        <input
                            value={amount}
                            onChange={({target}) => setAmount(target.amount)}
                            className="form__field"
                            placeholder="Wpisz kwotę"
                            required
                            autoFocus
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Chcę otrzymać:
                        <select
                            value={currency}
                            onChange={onSelectChange}
                            className="form__selector"
                        >
                            {currencyBase.map((currency => (
                                <option
                                    key={currency.name}
                                    value={currency.name}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </select>
                    </label>
                </div>

                <button className="form__button ">Przelicz</button>

                <Result result={result} />

            </fieldset>
        </form>
    );
};

export default Form;