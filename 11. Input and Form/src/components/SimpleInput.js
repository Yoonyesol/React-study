import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false); //입력란이 건드려지는가 확인하는 state

  const enteredNameIsValid = enteredName.trim() !== ""; //입력값이 존재함
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched; //입력값이 존재하지 않고 입력창이 건드려졌다면

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true); //입력창에서 초점을 잃었다는 것은 그 전에 사용자가 입력창을 건드렸다는 뜻
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    //유효성 검증: 빈 입력값은 전송되지 않게 한다.
    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    //nameInputRef.current.value = "";  //자바스크립트로 DOM에 접근하는 방식. 지양해야 함
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
