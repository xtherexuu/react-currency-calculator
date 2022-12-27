import { useState } from "react";
import Header from "./Header";
import Video from "./Video";
import Wrapper from "./Wrapper";
import Section from "./Section";
import Form from "./Form";
import SelectValue from "./Select";
import InputAmount from "./Input";
import Result from "./Result";

function App() {
    const [value, setValue] = useState("");
    const [currency, setCurrency] = useState("PLN");
    const [exchangedCurrency, setExchangedCurrency] = useState("EUR");
    const [result, setResult] = useState("");
    const [amount, setAmount] = useState("");
    const [inputCurrency, setInputCurrency] = useState(currency);
    const [outputCurrency, setOutputCurrency] = useState(exchangedCurrency);

    const inputCurrencyRate = () => {
        switch (currency) {
            case "PLN":
                return 1;
            case "EUR":
                return 4.7;
            case "USD":
                return 4.41;
            case "GBP":
                return 5.39;
        }
    };

    const outputCurrencyRate = () => {
        switch (exchangedCurrency) {
            case "PLN":
                return 1;
            case "EUR":
                return 4.7;
            case "USD":
                return 4.41;
            case "GBP":
                return 5.39;
        }
    };

    const calculator = () => {
        return (+inputCurrencyRate() * +value) / +outputCurrencyRate();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setResult(() => calculator().toFixed(2));
        setAmount(value);
        setInputCurrency(currency);
        setOutputCurrency(exchangedCurrency);
    };

    return (
        <>
            <Header />
            <Video />
            <Wrapper>
                <Section>
                    <Form onFormSubmit={onFormSubmit}>
                        <fieldset className="fieldset">
                            <legend className="fieldset__legend">Przelicznik</legend>
                            <p>
                                <SelectValue
                                    currency={currency}
                                    setCurrency={setCurrency}
                                    exchangedCurrency={exchangedCurrency}
                                    setExchangedCurrency={setExchangedCurrency}
                                />
                            </p>
                            <p>
                                <InputAmount setValue={setValue} value={value} />
                            </p>
                            <p className="filedset__paragraph">
                                Kurs aktualny w dniu: 16.12.2022r.
                            </p>
                        </fieldset>
                        <p>
                            <button className="form__button">Przelicz</button>
                        </p>
                    </Form>
                    <Result
                        result={result}
                        outputCurrency={outputCurrency}
                        inputCurrency={inputCurrency}
                        amount={amount}
                    />
                </Section>
            </Wrapper>
        </>
    );
}

export default App;
