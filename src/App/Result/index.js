import "./style.css";

const Result = ({ result }) => (
    <>
        <p
            className={`result__paragraph${
                result.exchangedAmount ? "" : " result__paragraph--hidden"
            }`}
        >
            Po przeliczenniu otrzymasz:{" "}
            <strong className="result__strong">
                {result.exchangedAmount} {result.outputCurrency}
            </strong>
        </p>
        <p
            className={`result__paragraph result__paragraph--explain${
                result.exchangedAmount ? "" : " result__paragraph--hidden"
            }`}
        >
            <strong className="explanationResult">
                {result.amount} {result.inputCurrency} ={" "}
                <span className="explanationResult--finalResult">
                    {result.exchangedAmount} {result.outputCurrency}
                </span>
            </strong>
        </p>
    </>
);

export default Result;
