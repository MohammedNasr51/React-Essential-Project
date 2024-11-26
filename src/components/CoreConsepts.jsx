import { CORE_CONCEPTS } from "../data"
import CoreConsept from "./CoreConsept"
import Section from "./Section";
export default function CoreConsepts() {
    console.log('redering coreconsepts component');
    return (
        <Section title={'Core Cosepts'} id={"core-concepts"}>
            <ul>
                {CORE_CONCEPTS.map((coreItem) => <CoreConsept key={coreItem.title} {...coreItem} />)}
            </ul>
        </Section>
    )
}
