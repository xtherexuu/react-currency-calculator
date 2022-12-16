import "./style.css";

const Result = ({ result, inputCurrency, outputCurrency, amount }) => (
    <>
        <p className={`result__paragraph${result ? "" : " result__paragraph--hidden"}`}>
            Po przeliczenniu otrzymasz:{" "}
            <strong className="result__strong js-resoult">
                {result} {outputCurrency}
            </strong>
        </p>
        <p
            className={`result__paragraph result__paragraph--explain${
                result ? "" : " result__paragraph--hidden"
            }`}
        >
            <strong className="js-explanationResoult">
                {amount} {inputCurrency} = {result} {outputCurrency}
            </strong>
        </p>
    </>
);

export default Result;
