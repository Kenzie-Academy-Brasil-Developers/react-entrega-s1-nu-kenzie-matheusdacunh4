import "./style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const createListItem = (form) => {
    const listItem = {
      description: form[0].value,
      type: form[2].value,
      value: Number(form[1].value),
    };
    setListTransactions([...listTransactions, listItem]);
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        createListItem(e.target);
      }}
    >
      <div className="form_description">
        <span className="form_description_title">Descrição</span>
        <input
          className="form_description_input"
          type="text"
          placeholder="Digite aqui sua descrição"
          required
        />
        <span className="form_description_ex">Ex: Compra de roupas</span>
      </div>
      <div className="form_value_type">
        <div className="form_value">
          <span className="form_value_title">Valor</span>
        <input className="form_value_input" type="number" placeholder="1 R$" min={0} required />
        </div>
        <div className="form_type">
          <span className="form_type_title">Tipo de valor</span>
        <select className="form_type_select" required>
          <option className="form_type_option" value="Entrada">Entrada</option>
          <option className="form_type_option" value="Despesa">Despesa</option>
        </select>
        </div>
      </div>
      <button className="form-button" type="submit">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
