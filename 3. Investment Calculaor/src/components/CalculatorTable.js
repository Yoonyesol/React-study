const CalculatorTable = ({ cacResult, initialInvestment }) => {
  //숫자 -> 통화 서식
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {cacResult.map((it) => (
          <tr key={it.year}>
            <td>{it.year}</td>
            <td>{formatter.format(it.savingsEndOfYear)}</td>
            <td>{formatter.format(it.yearlyInterest)}</td>
            <td>
              {formatter.format(
                it.savingsEndOfYear -
                  initialInvestment -
                  it.yearlyContribution * it.year
              )}
            </td>
            <td>
              {formatter.format(
                initialInvestment + it.yearlyContribution * it.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalculatorTable;
