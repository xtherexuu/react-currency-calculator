import "./style.css";

const Form = ({ SelectValue, InputAmount, Filedset, Button }) => (
    <form className="form">
        <Filedset SelectValue={SelectValue} InputAmount={InputAmount} />
        <p>
            <Button />
        </p>
    </form>
);

export default Form;
