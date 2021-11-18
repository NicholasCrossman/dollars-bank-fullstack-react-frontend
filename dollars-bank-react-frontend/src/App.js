import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import CreateCustomerForm from "./components/CreateCustomerForm";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Transfer from "./components/Transfer";
import HomePage from "./components/HomePage";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Customer from "./components/Customer";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Righteous',
      'cursive',
    ].join(','),
  },});

function App() {
  return (
  <ThemeProvider theme={theme}>
    <div className="App">
       <Router>
        <Routes>
          <Route exact path={"/"} element={<HomePage/>}/>
          <Route path={"/account"} element={<Customer/>}/>
          <Route path={"/deposit"} element={<Deposit/>}/>
          <Route path={"/withdrawl"} element={<Withdraw/>}/>
          <Route path={"/transfer"} element={<Transfer/>}/>
          <Route path={"/passchange"} /* element={}*//>
          <Route path={"/logout"} /* element={}*//>
          <Route path={"/login"}  element={<LoginForm/>}/>
          <Route path={"/create"} element={<CreateCustomerForm/>}/>
        </Routes>
      </Router>
    </div>
  </ThemeProvider>
  );
}

export default App;
// {/* <LoginForm/> */}
// <CreateCustomerForm/>
//<Withdraw />
//<Deposit />
