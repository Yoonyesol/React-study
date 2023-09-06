import { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Button from "../common/Button";
import Card from "../common/Card";
import ErrorModal from "../common/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [userInput, setUserInput] = useState({
    id: "",
    userName: "",
    age: "",
  });
  const [error, setError] = useState();

  const inputUserHandler = (input, data) => {
    setUserInput((prevData) => {
      return {
        ...prevData,
        [input]: data,
        id: Math.random().toString(),
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault(); //오류 원인
    const enteredName = nameInputRef.current.value; //ref가 지정된 dom의 값을 얻어온다.
    const etenteredAge = ageInputRef.current.value;
    console.log(nameInputRef);
    if (enteredName.trim().length === 0 || etenteredAge.trim().length === 0) {
      setError({
        //오류에 따라 다른 상태를 설정
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+etenteredAge < 1) {
      setError({
        //오류가 정의될 때마다 렌더링되도록 값을 설정
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.saveNewUser(userInput); //상위 컴포넌트로 데이터 전송

    setUserInput({
      id: "",
      userName: "",
      age: "",
    });
  };

  const errorHandler = () => {
    setError(null); //에러객체를 null로 설정해 falsy취급됨
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            value={userInput.userName}
            onChange={(e) => inputUserHandler("userName", e.target.value)}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={userInput.age}
            onChange={(e) => inputUserHandler("age", e.target.value)}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
