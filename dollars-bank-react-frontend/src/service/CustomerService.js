import axios from "axios";
import React from "react";

const CUSTOMER_URL = "http://localhost:7061/api";

class CustomerService {
  constructor() {
    this.token = "";
  }

  authHeader = () => {
    return {
      Authorization: "Bearer " + this.token,
    };
  };

  /**
     * 
     * @param {*} loginInfo - Looks like
     *          loginInfo = {
                    username: username,
                    password: password
                }
     */

  /**
     * 
     * @param {*} newAccountInfo - Looks like
     *          loginInfo = {
                     name:'',
        address:'',
        phoneNumber:'',
        username: '',
        password: '',
        initialDeposit:'',
        currentBalance:''
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
          //console.log("ServiceResponse: " + JSON.stringify(response));
          if (response.status === 200) {
            // login succeeded
            console.log("Service: login success!");
            this.token = response.data;
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
            this.token = response.data;
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
    };
    //console.log(loginInfo);
    //console.log(JSON.stringify(loginInfo));

    return (
      axios
        .post(url, JSON.stringify(depositInfo), { headers })
        // save the token in the state
        .then((response) => {
          //console.log("ServiceResponse: " + JSON.stringify(response));
          if (response.status === 200) {
            // deposit  succeeded
            console.log("Service: Account Creation success!");
            this.token = response.data;
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
    };
    //console.log(loginInfo);
    //console.log(JSON.stringify(loginInfo));

    return (
      axios
        .post(url, JSON.stringify(withdrawInfo), { headers })
        // save the token in the state
        .then((response) => {
          //console.log("ServiceResponse: " + JSON.stringify(response));
          if (response.status === 200) {
            // withdraw  succeeded
            console.log("Service: withdraw  success!");
            this.token = response.data;
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
}

export default CustomerService;
