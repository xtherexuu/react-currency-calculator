import "./style.css";

const Form = ({
    onFormSubmit,
    currency,
    setCurrency,
    exchangedCurrency,
    setExchangedCurrency,
    setValue,
    value,
    SelectValue,
    InputAmount,
    Filedset,
    Button,
}) => (
    <form className="form" onSubmit={onFormSubmit}>
        <Filedset
            currency={currency}
            setCurrency={setCurrency}
            exchangedCurrency={exchangedCurrency}
            setExchangedCurrency={setExchangedCurrency}
            setValue={setValue}
            value={value}
            SelectValue={SelectValue}
            InputAmount={InputAmount}
        />
        <p>
            <Button />
        </p>
    </form>
);

export default Form;
