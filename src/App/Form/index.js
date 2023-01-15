import "./style.css";
import { useState } from "react";
import SelectValue from "./Select";
import InputAmount from "./Input";
import currencies from "../currencies";

const Form = ({ result, setResult }) => {
    const [inputCurrency, setInputCurrency] = useState(currencies[0].short);
    const [outputCurrency, setOutputCurrency] = useState(currencies[1].short);
    const [amount, setAmount] = useState("");

    const calculator = () => {
        const inputRate = currencies.find(({ short }) => short === inputCurrency).rate;
        const outputRate = currencies.find(({ short }) => short === outputCurrency).rate;

        return (inputRate * +amount) / outputRate;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setResult({
            inputCurrency,
            amount,
            exchangedAmount: calculator().toFixed(2),
            outputCurrency,
        });
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="fieldset">
                <legend className="fieldset__legend">Przelicznik</legend>
                <p>
                    <SelectValue
                        inputCurrency={inputCurrency}
                        setInputCurrency={setInputCurrency}
                        outputCurrency={outputCurrency}
                        setOutputCurrency={setOutputCurrency}
                        currencies={currencies}
                    />
                </p>
                <p>
                    <InputAmount amount={amount} setAmount={setAmount} currencies={currencies} />
                </p>
                <p className="filedset__paragraph">Kurs aktualny w dniu: 15.01.2023r.</p>
            </fieldset>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
        </form>
    );
};

export default Form;
