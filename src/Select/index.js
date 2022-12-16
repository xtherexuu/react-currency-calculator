import "./style.css";

const Select = () => (
    <>
        <label className="label">
            Wybierz walutę z:&nbsp;
            <select className="select">
                <option selected>PLN</option>
                <option>EUR</option>
                <option>USD</option>
                <option>GBP</option>
            </select>
            &nbsp;Na:&nbsp;
            <select className="select">
                <option>PLN</option>
                <option selected>EUR</option>
                <option>USD</option>
                <option>GBP</option>
            </select>
        </label>
    </>
);

export default Select;
