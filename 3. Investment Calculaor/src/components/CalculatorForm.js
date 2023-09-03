import { useState } from "react";

// input 초기값
// 컴포넌트 변경 시 리렌더링 될 필요가 없는 데이터: 컴포넌트 밖에 선언
const initialUserInput = {
  "current-savings": 10000, //'-'가 포함되어 있으므로 문자열로 묶기
  "yearly-contribution": 12000,
  "expected-return": 7,
  duration: 10,
};

const CalculatorForm = (props) => {
  // state 선언 및 초기화
  const [userInput, setUserInput] = useState(initialUserInput);

  // generic event handler, input: input 식별자, value: 입력받은 값
  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      //prevInput: 최신값
      return {
        ...prevInput,
        [input]: value, //['식별자']를 통해 프로퍼티에 동적 접근 가능(대괄호 표기법)
      };
    });
  };

  // submit, userInput state를 App.js(상위 컴포넌트)의 함수로 전달
  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
  };

  // reset: 초기상태로 복귀
  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["current-savings"]} // 프로퍼티 접근
            onChange={(e) =>
              inputChangeHandler("current-savings", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(e) =>
              inputChangeHandler("yearly-contribution", e.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(e) =>
              inputChangeHandler("expected-return", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(e) => inputChangeHandler("duration", e.target.value)}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculatorForm;
