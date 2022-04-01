import "./style.css";
import logo from "./../../img/imgIndex.png";
const Index = ({ callBack }) => {
  return (
    <main className="index">
      <section className="index-root">
        <section className="index-msg">
          <h1>
            Nu <span>Kenzie</span>
          </h1>
          <p>Centralize o controle das suas finanças</p>
          <p className="alert-msg">de forma rápida e segura</p>
          <button onClick={callBack}>Iniciar</button>
        </section>
        <section className="index-img">
          <img src={logo} alt="" />
        </section>
      </section>
    </main>
  );
};
export default Index;
