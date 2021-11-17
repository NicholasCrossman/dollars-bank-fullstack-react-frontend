import axios from 'axios';
import React from 'react';

const CUSTOMER_URL = "http://localhost:7061/api";

class CustomerService {
    
    constructor() {
        this.token = '';
    }

    authHeader = () => {
        return {
            'Authorization': 'Bearer ' + this.token
        };
    }

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
            'Content-Type': 'application/json'
        }
        //console.log(loginInfo);
        //console.log(JSON.stringify(loginInfo));
    
        return axios.post(url, JSON.stringify(loginInfo), {headers})
                // save the token in the state
                .then(response => {
                    //console.log("ServiceResponse: " + JSON.stringify(response));
                    if(response.status === 200) {
                        // login succeeded
                        console.log("Service: login success!");
                        this.token = response.data;
                        return response;
                    }
                })
                .catch(error => {
                    // login failed
                    console.log("Error: " + error.message);
                    return error.message;
                });
    }
}

export default CustomerService;