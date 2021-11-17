import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import CreateCustomerForm from "./components/CreateCustomerForm";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";

function App() {
  return (
    <div className="App">
      <CreateCustomerForm />
    </div>
  );
}

export default App;
// {/* <LoginForm/> */}
// <CreateCustomerForm/>
//<Withdraw />
//<Deposit />
