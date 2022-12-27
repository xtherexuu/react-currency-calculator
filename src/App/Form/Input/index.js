import "./style.css";

const Input = ({ amount, setAmount }) => (
    <label className="input__label">
        Ilość:&nbsp;
        <input
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
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
