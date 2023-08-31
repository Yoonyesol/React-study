import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [eneteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    eneteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    //setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    //setEnteredAmount(e.target.value);
    setUserInput({
      ...userInput,
      eneteredAmount: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    //setEnteredDate(e.target.value);
    setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    });
  };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            //onChange={(e) => inputChangeHandler("title", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
