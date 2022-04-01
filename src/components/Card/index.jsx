import "./style.css";
const Card = ({ transaction, key, callBack, list }) => {
  function deleteTransaction() {
    callBack(list.filter((e) => e !== transaction));
  }
  return (
    <>
      {transaction.type === "entrada" ? (
        <li key={key} className="verde">
          <section className="salario-entrada">
            <h2>{transaction.description}</h2>
            <p>{transaction.type}</p>
          </section>
          <section className="valor-delete">
            <p>R$ {transaction.value},00</p>
            <button onClick={deleteTransaction}>&#128465;</button>
          </section>
        </li>
      ) : (
        <li key={key}>
          <section className="salario-entrada">
            <h2>{transaction.description}</h2>
            <p>{transaction.type}</p>
          </section>
          <section className="valor-delete">
            <p>R$ {transaction.value},00</p>
            <button onClick={deleteTransaction}>&#128465;</button>
          </section>
        </li>
      )}
    </>
  );
};
export default Card;
