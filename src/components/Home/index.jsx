import { useState } from "react";
import Form from "../Form";
import List from "../List";
import "./style.css";
const Home = ({ callBack, listTransactions, setListTransactions }) => {
  const [teste, setTeste] = useState("");
  const mudandoTeste = () => {
    setTeste("entrada");
  };
  const mudandoTesteTodos = () => {
    setTeste("");
  };
  const mudandoTesteSaida = () => {
    setTeste("saida");
  };
  return (
    <div className="main-root">
      <header>
        <h1>
          Nu <span>Kenzie</span>
        </h1>
        <button onClick={callBack}>Inicio</button>
      </header>
      <main>
        <section>
          {listTransactions.length > 0 ? (
            <>
              <Form list={listTransactions} callBack={setListTransactions} />
              <section className="sectionPrice">
                <aside>
                  <h3>Valor Total:</h3>
                  <p>O valor se refere ao total que você tem</p>
                </aside>
                <p className="price">
                  ${" "}
                  {listTransactions.reduce(
                    (acc, e) => acc + Number(e.value),
                    0
                  )}
                </p>
              </section>
            </>
          ) : (
            <Form list={listTransactions} callBack={setListTransactions} />
          )}
        </section>
        <section className="nav-bar">
          <section className="nav-bar-financias">
            <h3>Resumo financeiro</h3>
            <aside>
              <button onClick={mudandoTesteTodos}>Todos</button>
              <button onClick={mudandoTeste}>Entradas</button>
              <button onClick={mudandoTesteSaida}>Despesas</button>
            </aside>
          </section>
          {listTransactions.length > 0 ? (
            <List
              list={listTransactions}
              callBack={setListTransactions}
              filtro={teste}
            />
          ) : (
            <section className="sem-cards">
              <p>Você ainda não possui nenhum lançamento</p>
              <section className="container-vazio">
                <div className="divMaior"></div>
                <div className="divMenor"></div>
              </section>
              <section className="container-vazio">
                <div className="divMaior"></div>
                <div className="divMenor"></div>
              </section>
              <section className="container-vazio">
                <div className="divMaior"></div>
                <div className="divMenor"></div>
              </section>
            </section>
          )}
        </section>
      </main>
    </div>
  );
};
export default Home;
