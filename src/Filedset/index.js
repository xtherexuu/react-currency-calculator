import "./style.css";

const Filedset = ({
    currency,
    setCurrency,
    exchangedCurrency,
    setExchangedCurrency,
    setValue,
    value,
    SelectValue,
    InputAmount,
}) => (
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
        <p>Kurs aktualny w dniu: 16.12.2022r.</p>
    </fieldset>
);

export default Filedset;
