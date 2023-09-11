import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false); //입력란이 건드려지는가 확인하는 state

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState("");

  const enteredNameIsValid = enteredName.trim() !== ""; //입력값이 존재함
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched; //입력값이 존재하지 않고 입력창이 건드려졌다면
  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false; //전체 form을 검증하는 state

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true); //입력창에서 초점을 잃었다는 것은 그 전에 사용자가 입력창을 건드렸다는 뜻
  };

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    //유효성 검증: 빈 입력값은 전송되지 않게 한다.
    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    //nameInputRef.current.value = "";  //자바스크립트로 DOM에 접근하는 방식. 지양해야 함
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
