import "../styles/formValidation.css";

const FormValidation = ({ message }) => {
  const { shortPass, contain, userOrPass } = message;

  return (
    <>
      <div className="validationMessage">
        {userOrPass}
        {contain} <br />
        {shortPass}
      </div>
    </>
  );
};

export default FormValidation;
