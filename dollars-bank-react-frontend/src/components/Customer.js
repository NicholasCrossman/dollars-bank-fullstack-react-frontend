import React from "react";
import { Router } from 'react-router-dom';
import NavbarBank from "./NavbarBank";

function Customer(props) {
    return (
        <div>
            <div>
                <h1>Your Account</h1>
                <br/>

                <h3>Name: {props.name}</h3><br/>
                <h3>Username: {props.username}</h3><br/>
                <h3>Address: {props.address}</h3><br/>
                <h3>Phone: {props.phoneNumber}</h3><br/>
                <h3>Balance: {props.currentBalance}</h3><br/>
            </div>
            <div>
                <NavbarBank/>
            </div>
            <div>
                <h2>Recent Transactions</h2>

        <table>
          <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">Date</th>
               <th scope="col">Amount</th>
               <th scope="col">Balance Before</th>
               <th scope="col">Balance After</th>
               <th scope="col">Message</th>
             </tr>
          </thead>
         <tbody>
         {Transactions &&
                Transactions.map((transactions) => (
                  <tr key={transacton.date}>
                    <td>{customer.amount}</td>
                    <td>{customer.balanceBefore}</td>
                    <td>{customer.balanceAfter}</td>
                    <td>{transaction.statusMessage}</td>
                      <input
                        name="recieverId"
                        // key={item}
                        // id={item}
                        value={transaction.id}
                        type="radio"
                        // onChange={(e) => updateTransfer(e, "recieverId")}
                        />

                  </tr>
                ))}

              </tbody>

        </table>
                
 
            </div>

        </div>
    );
}

export default Customer;
