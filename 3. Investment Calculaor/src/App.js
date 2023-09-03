import { useState } from "react";
import CalculatorForm from "./components/CalculatorForm";
import CalculatorHeader from "./components/CalculatorHeader";
import CalculatorTable from "./components/CalculatorTable";

function App() {
  const [userInput, setUserInput] = useState(null);

  // userInput: 하위컴포넌트에서 전달받은 유저입력값 객체
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <CalculatorHeader />
      <CalculatorForm onCalculate={calculateHandler} />
      <CalculatorTable />
    </div>
  );
}

export default App;
