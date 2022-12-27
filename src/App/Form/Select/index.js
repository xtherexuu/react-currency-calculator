import "./style.css";

const Select = ({
    inputCurrency,
    setInputCurrency,
    outputCurrency,
    setOutputCurrency,
    currencies,
}) => (
    <>
        <label className="select__label">
            Wybierz walutę z:&nbsp;
            <select
                value={inputCurrency}
                onChange={(event) => setInputCurrency(event.target.value)}
                className="select"
            >
                {currencies.map(({ short }) => (
                    <option key={short} value={short}>
                        {short}
                    </option>
                ))}
            </select>
            &nbsp;Na:&nbsp;
            <select
                value={outputCurrency}
                onChange={(event) => setOutputCurrency(event.target.value)}
                className="select"
            >
                {currencies.map(({ short }) => (
                    <option key={short} value={short}>
                        {short}
                    </option>
                ))}
            </select>
        </label>
    </>
);

export default Select;
