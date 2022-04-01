import './App.css';
import { useState } from 'react';
import Index from './components/Index';
import Home from './components/Home';
function App() {
  const [listTransactions, setListTransactions] = useState([])
  const [entrou, setEntrou] = useState(true)
  function logar() {
    setEntrou(false)
  }
  function logout() {
    setEntrou(true)
  }
  return (
    <div className="App">
      {entrou ?
        <Index callBack={logar} />
        :
        <>
          <Home callBack={logout} listTransactions={listTransactions} setListTransactions={setListTransactions} />
        </>
      }
    </div>

  );
}

export default App;
