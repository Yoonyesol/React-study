import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstnameVal,
    isValid: firstnameIsValid,
    hasError: firstnameHasError,
    valueChangeHandler: firstnameChangeHandler,
    valueBlurHandler: firstnameBlurHandler,
    reset: firstnameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lastnameVal,
    isValid: lastnameIsValid,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameChangeHandler,
    valueBlurHandler: lastnameBlurHandler,
    reset: lasttnameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: emailVal,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim().includes("@"));

  let formValid = false;

  if (firstnameIsValid && lastnameIsValid && emailIsValid) {
    formValid = true;
  }

  const sumbmitHandler = (e) => {
    e.preventDefault();
    firstnameBlurHandler(true);
    lastnameBlurHandler(true);
    emailBlurHandler(true);

    if (!formValid) {
      return;
    }

    console.log(firstnameVal);
    console.log(lastnameVal);
    console.log(emailVal);

    firstnameReset();
    lasttnameReset();
    emailReset();
  };

  const firstnameClasses = !firstnameHasError
    ? "form-control"
    : "form-control invalid";
  const lastnameClasses = !lastnameHasError
    ? "form-control"
    : "form-control invalid";
  const emailClasses = !emailHasError ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={sumbmitHandler}>
      <div className="control-group">
        <div className={firstnameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="firstname"
            onChange={firstnameChangeHandler}
            value={firstnameVal}
            onBlur={firstnameBlurHandler}
          />
          {firstnameHasError && (
            <p className="error-text">First Name is not a empty.</p>
          )}
        </div>
        <div className={lastnameClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastnameChangeHandler}
            value={lastnameVal}
            onBlur={lastnameBlurHandler}
          />
          {lastnameHasError && (
            <p className="error-text">Last Name is not a empty.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={emailVal}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
