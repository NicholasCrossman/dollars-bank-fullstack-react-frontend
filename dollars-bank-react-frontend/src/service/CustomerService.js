import axios from "axios";
import React from "react";

const CUSTOMER_URL = "http://localhost:7061/api";

class CustomerService {
  /**
 * 
 * @param {*} loginInfo - Looks like
 *          loginInfo = {
                username: username,
                password: password
            }
    */
  postLogin = async (loginInfo) => {
    let url = CUSTOMER_URL + "/login";

    const headers = {
      "Content-Type": "application/json",
    };
    //console.log(loginInfo);
    //console.log(JSON.stringify(loginInfo));

    return (
      axios
        .post(url, JSON.stringify(loginInfo), { headers })
        // save the token in the state
        .then((response) => {
          //console.log("LoginServiceResponse: " + JSON.stringify(response.data));
          if (response.status === 200) {
            // login succeeded
            console.log("Service: login success!");
            this.setToken(response.data);
            return response;
          }
        })
        .catch((error) => {
          // login failed
          console.log("Error: " + error.message);
          return error.message;
        })
    );
  };

  logout = () => {
    localStorage.removeItem("id_token");
  };

  setToken = (token) => {
    localStorage.setItem("id_token", token);
  };

  getToken = () => {
    return localStorage.getItem("id_token");
  };

  /**
     * 
     * @param {*} newAccountInfo - Looks like
     *        loginInfo = {
                name:'',
                address:'',
                phoneNumber:'',
                username: '',
                password: '',
                initialDeposit: 0.0
            }
     */
  createAccount = async (newAccountInfo) => {
    let url = CUSTOMER_URL + "/create-account";

    const headers = {
      "Content-Type": "application/json",
    };
    //console.log(loginInfo);
    //console.log(JSON.stringify(loginInfo));

    return (
      axios
        .post(url, JSON.stringify(newAccountInfo), { headers })
        // save the token in the state
        .then((response) => {
          //console.log("ServiceResponse: " + JSON.stringify(response));
          if (response.status === 200) {
            // Account Creation succeeded
            console.log("Service: Account Creation success!");
            return response;
          }
        })
        .catch((error) => {
          // Account creation failed
          console.log("Error: " + error.message);
          return error.message;
        })
    );
  };

  deposit = async (depositInfo) => {
    let url = CUSTOMER_URL + "/transaction/deposit";

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.getToken(),
    };
    //console.log(loginInfo);
    //console.log(JSON.stringify(loginInfo));

    return (
      axios
        .post(url, JSON.stringify(depositInfo), { headers })
        // save the token in the state
        .then((response) => {
          //console.log("ServiceResponse: " + JSON.stringify(response));
          if (response.status === 201) {
            // deposit  succeeded
            console.log("Service: Deposit success!");
            return response;
          }
        })
        .catch((error) => {
          // deposit creation failed
          console.log("Error: " + error.message);
          return error.message;
        })
    );
  };

  withdraw = async (withdrawInfo) => {
    let url = CUSTOMER_URL + "/transaction/withdraw";

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.getToken(),
    };
    //console.log(loginInfo);
    //console.log(JSON.stringify(loginInfo));
    console.log("Headers " + JSON.stringify(headers));
    console.log("Data: " + JSON.stringify(withdrawInfo));
    return (
      axios
        .post(url, JSON.stringify(withdrawInfo), { headers })
        // save the token in the state
        .then((response) => {
          //console.log("ServiceResponse: " + JSON.stringify(response));
          if (response.status === 201) {
            // withdraw  succeeded
            console.log("Service: withdraw  success!");
            return response;
          }
        })
        .catch((error) => {
          // withdraw creation failed
          console.log("Error: " + error.message);
          return error.message;
        })
    );
  };

  transfer = async (transferInfo) => {
    let url = CUSTOMER_URL + "/transaction/transfer";

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.getToken(),
    };

    console.log("Headers " + JSON.stringify(headers));
    console.log("Data: " + JSON.stringify(transferInfo));
    return (
      axios
        .post(url, JSON.stringify(transferInfo), { headers })
        // save the token in the state
        .then((response) => {
          //console.log("ServiceResponse: " + JSON.stringify(response));
          if (response.status === 201) {
            // transfer  succeeded
            console.log("Service: Transfer success!");
            return response;
          }
        })
        .catch((error) => {
          // transfer creation failed
          console.log("Error: " + error.message);
          return error.message;
        })
    );
  };

  getAllOtherCustomers = async () => {
    let url = CUSTOMER_URL + "/customer/other";

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.getToken(),
    };

    console.log("Headers " + JSON.stringify(headers));
    // console.log("Data: " + JSON.stringify(customerInfo));
    return (
      axios
        .get(url, { headers })
        // save the token in the state
        .then((response) => {
          console.log(
            "CustomerServiceResponse allother: " + JSON.stringify(response)
          );
          if (response.status === 200) {
            // getting customer  succeeded
            console.log("Service: get all other success!");
            return response;
          }
        })
        .catch((error) => {
          // transfer creation failed
          console.log("Error: " + error.message);
          return error.message;
        })
    );
  };

  getCustomerInfo = async () => {
    let url = CUSTOMER_URL + "/customer/data";

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.getToken(),
    };

    //console.log("Headers " + JSON.stringify(headers));
    // console.log("Data: " + JSON.stringify(customerInfo));
    return (
      axios
        .get(url, { headers })
        // save the token in the state
        .then((response) => {
          console.log(
            "CustomerServiceResponse customerInfo: " + JSON.stringify(response)
          );
          if (response.status === 200) {
            // getting customer  succeeded
            console.log("Service: get customer success!");
            return response;
          }
        })
        .catch((error) => {
          // transfer creation failed
          console.log("Error: " + error.message);
          return error.message;
        })
    );
  };
  getAllTransactions = async () => {
    let url = CUSTOMER_URL + "/transaction/history";

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.getToken(),
    };

    //console.log("Headers " + JSON.stringify(headers));
    // console.log("Data: " + JSON.stringify(customerInfo));
    return (
      axios
        .get(url, { headers })
        // save the token in the state
        .then((response) => {
          console.log(
            "CustomerServiceResponse allTransactions: " +
              JSON.stringify(response)
          );
          if (response.status === 200) {
            // getting transactions  succeeded
            console.log("Service: get 5 transactions success!");
            return response;
          }
        })
        .catch((error) => {
          // transaction get failed
          console.log("Error getting transactions: " + error.message);
          return error.message;
        })
    );
  };
}

export default CustomerService;
