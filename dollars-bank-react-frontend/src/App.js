import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import CreateCustomerForm from "./components/CreateCustomerForm";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AppBarLoggedIn from "./components/AppBarLoggedIn";
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
       <HomePage/>
      <div>
        <Routes>
          <Route exact path={"/"} element={<HomePage />}/>
          <Route path={"/account"} element={<Customer />}/>
          <Route path={"/deposit"} element={<Deposit />}/>
          <Route path={"/withdrawl"} element={<Withdraw />}/>
          <Route path={"/transfer"} /* element={}*//>
          <Route path={"/passchange"} /* element={}*//>
          <Route path={"/logout"} /* element={}*//>
          <Route path={"/login"}  element={<LoginForm />}/>
          <Route path={"/create"} element={<CreateCustomerForm />}/>
        </Routes>
      </div>
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
