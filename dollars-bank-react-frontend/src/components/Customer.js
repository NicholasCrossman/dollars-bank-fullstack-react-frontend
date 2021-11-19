import React, { useEffect, useState } from "react";
import { Router } from "react-router-dom";
import CustomerService from "../service/CustomerService";
import NavbarBank from "./NavbarBank";

function Customer() {
  const [transactions, setTransactions] = useState([]);
  const [account, setAccount] = useState({});

  let service = new CustomerService();

  useEffect(() => {
    getCustomerInfo();
    getAllTransactions();
  }, []);

  const getCustomerInfo = async () => {
    let response = await service.getCustomerInfo();
    //console.log("LoginResponse: " + JSON.stringify(response));
    if (response.status === 200) {
      console.log("GetCustomerInfo: Login success!");
      //console.log(JSON.stringify(response.data));

      setAccount(response.data);
    } else {
      // otherwise login failed with an error message
      console.log("Error: GetAllOthercustomers failed.");
    }
  };

  const getAllTransactions = async () => {
    let response = await service.getAllTransactions();
    //console.log("LoginResponse: " + JSON.stringify(response));
    if (response.status === 200) {
      console.log("GetAllTransactions: Login success!");
      //console.log(JSON.stringify(response.data));

      setTransactions(response.data);
    } else {
      // otherwise login failed with an error message
      console.log("Error: GetAllOthercustomers failed.");
    }
  };

  return (
    <div>
      <div>
        <NavbarBank />
      </div>
      <div>
        <h1>Your Account</h1>
        <br />

        <h3>Name: {account.name}</h3>
        <br />
        <h3>Username: {account.username}</h3>
        <br />
        <h3>Address: {account.address}</h3>
        <br />
        <h3>Phone: {account.phoneNumber}</h3>
        <br />
        <h3>Balance: {account.currentBalance}</h3>
        <br />
      </div>

      <div>
        <h2>Recent Transactions</h2>

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Balance Before</th>
              <th>Balance After</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {transactions &&
              transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date.toString()}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.balanceBefore}</td>
                  <td>{transaction.balanceAfter}</td>
                  <td>{transaction.statusMessage}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customer;
