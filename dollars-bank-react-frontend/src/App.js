import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import CreateCustomerForm from "./components/CreateCustomerForm";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AppBarLoggedIn from "./components/AppBarLoggedIn";
import Transfer from "./components/Transfer";

function App() {
  return (
    <div className="App">
      <Transfer />
    </div>
  );
}

export default App;
// {/* <LoginForm/> */}
// <CreateCustomerForm/>
//<Withdraw />
//<Deposit />
//<AppBarLoggedIn />
