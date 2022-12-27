import { useState } from "react";
import Header from "./Header";
import Video from "./Video";
import Wrapper from "./Wrapper";
import Section from "./Section";
import Form from "./Form";
import Result from "./Result";

function App() {
    const [result, setResult] = useState({});

    return (
        <>
            <Header />
            <Video />
            <Wrapper>
                <Section>
                    <Form result={result} setResult={setResult} />
                    <Result result={result} />
                </Section>
            </Wrapper>
        </>
    );
}

export default App;
