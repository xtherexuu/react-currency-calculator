import "./style.css";

const Filedset = ({ SelectValue, InputAmount }) => (
    <fieldset className="fieldset">
        <legend class="fieldset__legend">Przelicznik</legend>
        <p>
            <SelectValue />
        </p>
        <p>
            <InputAmount />
        </p>
        <p>Kurs aktualny w dniu: 13.12.2022r.</p>
    </fieldset>
);

export default Filedset;
