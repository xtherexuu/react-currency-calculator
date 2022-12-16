import React from "react";
import Header from "./Header";
import Video from "./Video";
import Wrapper from "./Wrapper";
import Section from "./Section";
import Form from "./Form";
import SelectValue from "./Select";
import InputAmount from "./Input";
import Filedset from "./Filedset";
import Button from "./Button";
import Result from "./Result";

function App() {
    const [value, setValue] = React.useState("");
    const [currency, setCurrency] = React.useState("PLN");
    const [exchangedCurrency, setExchangedCurrency] = React.useState("EUR");
    const [result, setResult] = React.useState("");
    const [amount, setAmount] = React.useState("");
    const [inputCurrency, setInputCurrency] = React.useState(currency);
    const [outputCurrency, setOutputCurrency] = React.useState(exchangedCurrency);

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
        <React.Fragment>
            <Header />
            <Video />
            <Wrapper>
                <Section>
                    <Form
                        onFormSubmit={onFormSubmit}
                        currency={currency}
                        setCurrency={setCurrency}
                        exchangedCurrency={exchangedCurrency}
                        setExchangedCurrency={setExchangedCurrency}
                        setValue={setValue}
                        value={value}
                        SelectValue={SelectValue}
                        InputAmount={InputAmount}
                        Filedset={Filedset}
                        Button={Button}
                    />
                    <Result
                        result={result}
                        outputCurrency={outputCurrency}
                        inputCurrency={inputCurrency}
                        amount={amount}
                    />
                </Section>
            </Wrapper>
        </React.Fragment>
    );
}

export default App;
