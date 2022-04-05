import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  return (
    <div className="App">
      <header className="page-header">
        <div className="header-title">
          <span className="header-title-nu">Nu</span>
          <span className="header-title-kenzie"> Kenzie</span>
        </div>
      </header>
      <main className="panel">
        <div className="leftSide">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="list">
          <div className="list-header">
            <h3 className="list-title">Resumo financeiro</h3>
          </div>
          <List listTransactions={listTransactions} />
        </div>
      </main>
    </div>
  );
}

export default App;
