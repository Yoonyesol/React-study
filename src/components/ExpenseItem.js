import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>2023-08-28</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">500,000원</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
