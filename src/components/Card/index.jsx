import "./style.css";

const Card = ({ transaction }) => {
  return (
    <>
      {transaction.type === "Entrada" ? (
        <div className="card">
          <div className="card-color-green"></div>
          <div className="card-content">
            <div className="card-description-type">
              <span className="card-description">
                {transaction.description}
              </span>
              <span className="card-type">{transaction.type}</span>
            </div>
            <div className="card-value-remove">
              <span className="card-value">
                {transaction.value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-color-gray"></div>
          <div className="card-content">
            <div className="card-description-type">
              <span className="card-description">
                {transaction.description}
              </span>
              <span className="card-type">{transaction.type}</span>
            </div>
            <div className="card-value-remove">
              <span className="card-value">
                {transaction.value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
