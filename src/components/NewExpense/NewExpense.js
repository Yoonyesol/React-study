import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  //enteredExpenseData: 하위 컴포넌트에서 받아온 값
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    //ExpenseForm 컴포넌트에서 이벤트 발생 시 실행되는 함수이므로 이 안에 App.js로 데이터를 보낼 함수를 실행시킨다.
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
