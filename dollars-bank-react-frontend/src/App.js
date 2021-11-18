import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import CreateCustomerForm from "./components/CreateCustomerForm";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AppBarLoggedIn from "./components/AppBarLoggedIn";
import HomePage from "./components/HomePage";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

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
      <HomePage />
    </div>
  </ThemeProvider>
  );
}

export default App;
// {/* <LoginForm/> */}
// <CreateCustomerForm/>
//<Withdraw />
//<Deposit />
