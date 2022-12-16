import "./style.css";

const Select = ({ currency, setCurrency, exchangedCurrency, setExchangedCurrency }) => (
    <>
        <label className="label">
            Wybierz walutę z:&nbsp;
            <select
                value={currency}
                onChange={(event) => setCurrency(event.target.value)}
                className="select"
            >
                <option>PLN</option>
                <option>EUR</option>
                <option>USD</option>
                <option>GBP</option>
            </select>
            &nbsp;Na:&nbsp;
            <select
                value={exchangedCurrency}
                onChange={(event) => setExchangedCurrency(event.target.value)}
                className="select"
            >
                <option>PLN</option>
                <option>EUR</option>
                <option>USD</option>
                <option>GBP</option>
            </select>
        </label>
    </>
);

export default Select;
