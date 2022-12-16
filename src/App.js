import React from "react";
import Header from "./Header";
import Video from "./Video";
import Wrapper from "./Wrapper";
import Section from "./Section";
import Form from "./Form";
import SelectValue from "./Select";
import InputAmount from "./Input";
import Filedset from "./Filedset";
import Button from "./Button";

function App() {
    return (
        <React.Fragment>
            <Header />
            <Video />
            <Wrapper>
                <Section>
                    <Form SelectValue={SelectValue} InputAmount={InputAmount} Filedset={Filedset} Button={Button} />
                    <p className="section__paragraph">
                        Po przeliczenniu otrzymasz: <strong class="section__strong js-resoult">sdfsdf</strong>
                    </p>
                    <p className="section__paragraph section__paragraph--explain">
                        <strong class="js-explanationResoult">
                            252352sdfsddddddddddddddddddddddddddddddddddddddddddddd52
                        </strong>
                    </p>
                </Section>
            </Wrapper>
        </React.Fragment>
    );
}

export default App;
