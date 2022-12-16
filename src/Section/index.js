import "./style.css";

const Section = ({ children }) => (
    <section className="section">
        <h2 class="section__subheader">Przelicz walutę</h2>
        {children}
    </section>
);

export default Section;
