import { EXAMPLES } from "../data"
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    console.log('rendering examples component');
    const [SlelectedTopic, setSlelectedTopic] = useState('');
    const { components, jsx, props, state } = EXAMPLES;
    const handleSelec = (selectedButton) => {
        setSlelectedTopic(selectedButton);
    }
    const { title, description, code } = SlelectedTopic;
    return (
        <Section title={'Examples'} id={"examples"}>
            <Tabs buttons={
                <>
                    {[components, jsx, props, state].map((element) => <TabButton key={element.title} isSelected={SlelectedTopic === element} onClick={() => handleSelec(element)}>{element.title}</TabButton>)}
                </>
            }>
                {SlelectedTopic ? (<div id="tab-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <pre>
                        <code>
                            {code}
                        </code>
                    </pre>
                </div>) : (<p>Please select a topic</p>)}
            </Tabs>
        </Section>
    )
}
