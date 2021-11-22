import Header from './Components/Header'
import Balance from './Components/Balance'
import Incomeexpenses from './Components/Incomeexpenses';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction'
import { GlobalProvider } from './Context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Header />
    <div className='container'>
      <Balance />
      <Incomeexpenses/>
      <TransactionList />
      <AddTransaction />
    </div>
    </GlobalProvider>
  );
}

export default App;
