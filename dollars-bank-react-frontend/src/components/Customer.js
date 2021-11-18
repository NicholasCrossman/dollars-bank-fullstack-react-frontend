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
                Put transactions here
            </div>

        </div>
    );
}

export default Customer;