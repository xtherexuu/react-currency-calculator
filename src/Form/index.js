import "./style.css";

const Form = ({ onFormSubmit, children }) => <form className="form" onSubmit={onFormSubmit}>{children}</form>;

export default Form;
