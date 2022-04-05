import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  return (
    <div className="total_money">
      <div className="total_money_desc">
        <span className="total_money_title">Valor Total:</span>
        <span className="total_money_sub">O valor se refere ao saldo</span>
      </div>
      <div className="total_money_value">
        <h3 className="total_money_value_inner">
          {listTransactions
            .reduce(
              (previousValue, currentValue) =>
                currentValue.type === "Entrada"
                  ? previousValue + currentValue.value
                  : previousValue - currentValue.value,
              0
            )
            .toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
        </h3>
      </div>
    </div>
  );
};

export default TotalMoney;
