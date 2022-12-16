import "./style.css";

const Input = () => (
    <label className="label">
        Ilość:&nbsp;
        <input className="input" required type="number" name="amount" min="0.01" max="1000000000" step="0.01" />
    </label>
);

export default Input;
