import "./style.css";
import Date from "../Date";

const Section = ({ children }) => (
    <section className="section">
        <Date />
        <h2 className="section__subheader">Przelicz walutę</h2>
        {children}
    </section>
);

export default Section;
