import { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../common/Button";
import Card from "../common/Card";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({
    id: "",
    userName: "",
    age: "",
  });

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
    if (
      userInput.userName.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      return;
    }
    if (+userInput.age < 1) {
      return;
    }
    props.saveNewUser(userInput); //상위 컴포넌트로 데이터 전송

    setUserInput({
      id: "",
      userName: "",
      age: "",
    });
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="userName">Username</label>
        <input
          id="userName"
          type="text"
          value={userInput.userName}
          onChange={(e) => inputUserHandler("userName", e.target.value)}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={userInput.age}
          onChange={(e) => inputUserHandler("age", e.target.value)}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
