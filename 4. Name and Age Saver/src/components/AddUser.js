import { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../common/Button";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({
    userName: "",
    age: "",
  });

  const inputUserHandler = (input, data) => {
    setUserInput((prevData) => {
      console.log(input, data);
      return {
        ...prevData,
        [input]: data,
      };
    });
  };

  const submitHandler = () => {
    props.saveNewUser(userInput);
    console.log(userInput);
  };

  return (
    <div className={styles.input}>
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
      <Button onClick={submitHandler} />
    </div>
  );
};
export default AddUser;
