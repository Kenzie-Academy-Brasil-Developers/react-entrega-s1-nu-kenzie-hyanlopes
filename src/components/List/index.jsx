import Card from "../Card";
import "./style.css";
const List = ({ list, callBack, filtro }) => {
  const listaTodos = [...list];
  const listaRecebido = [...list].filter((e) => e.type === "entrada");
  const listaSaida = [...list].filter((e) => e.type === "saida");
  if (filtro === "") {
    return (
      <ul>
        {listaTodos.map((e, index) => (
          <Card transaction={e} key={index} callBack={callBack} list={list} />
        ))}
      </ul>
    );
  } else if (filtro === "entrada") {
    return (
      <ul>
        {listaRecebido.map((e, index) => (
          <Card transaction={e} key={index} callBack={callBack} list={list} />
        ))}
      </ul>
    );
  } else {
    return (
      <ul>
        {listaSaida.map((e, index) => (
          <Card transaction={e} key={index} callBack={callBack} list={list} />
        ))}
      </ul>
    );
  }
};
export default List;
