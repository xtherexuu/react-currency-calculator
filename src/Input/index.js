import "./style.css";

const Input = ({ setValue, value }) => (
    <label className="label">
        Ilość:&nbsp;
        <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="input"
            required
            type="number"
            name="amount"
            min="0.01"
            max="1000000000"
            step="0.01"
        />
    </label>
);

export default Input;
