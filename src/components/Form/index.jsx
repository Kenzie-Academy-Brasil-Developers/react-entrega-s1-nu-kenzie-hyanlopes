import "./style.css";
const Form = ({ list, callBack }) => {
  let obj = {};

  const atualizandoArrList = (newList) => {
    callBack([...list, newList]);
  };

  const pegandoDadosForm = (e) => {
    e.preventDefault();
    let inputs = e.target;
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value) {
        obj[inputs[i].name] = inputs[i].value;
      }
    }
    atualizandoArrList(obj);
  };

  return (
    <form onSubmit={pegandoDadosForm} className="formCobranca">
      <section className="sectionDescricao">
        <label htmlFor="descricao">Descrição</label>
        <input
          type="text"
          id="descricao"
          name="description"
          placeholder="Digite aqui sua descrição"
          className="inputDescricao"
          required
        />
        <p>Ex: Compra de roupas</p>
      </section>
      <section className="valorArea">
        <section className="valorArea_labels">
          <label htmlFor="valor">Valor</label>
          <label htmlFor="tipoValor">Tipo de valor</label>
        </section>
        <section className="valorArea_inputs">
          <input
            type="number"
            id="valor"
            name="value"
            placeholder="1  R$"
            required
          />
          <select id="tipoValor" name="type">
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </section>
      </section>
      <button type="submit">Insira o valor</button>
    </form>
  );
};
export default Form;
