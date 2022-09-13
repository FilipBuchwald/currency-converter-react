import { useState } from "react";
import "./style.css"

const Form = () => {
    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");
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
                        Kwota w zł: <input
                            value={amount}
                            onChange={(event) => setAmount(event.target.amount)}
                            className="form__field"
                            placeholder="Wpisz kwotę"
                            required
                            autoFocus />
                    </label>
                </div>

                <div>
                    <label>
                        Chcę otrzymać:
                        <select
                            value={currency}
                            onChange={onSelectChange}
                            className="form__selector"
                            name="selectCurrency2">
                            <option>PLN</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>GBP</option>
                        </select>
                    </label>
                </div>

                <button className="form__button ">Przelicz</button>

                <div>
                    Po przewalutowaniu otrzymasz: <strong className="js-form__result"></strong>
                </div>

            </fieldset>
        </form>
    );
};

export default Form