import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CustomerService from "../service/CustomerService";

const CreateCustomerForm = (props) => {
  // save the form input
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    username: "",
    password: "",
    initialDeposit: "",
    currentBalance: "",
  });

  const [service] = useState(new CustomerService());

  // update the state with each change to the form
  const updateCustomer = (event, propertyName) => {
    const target = event.target;
    console.log(target);

    event.preventDefault();
    setCustomerInfo((prevState) => ({
      ...prevState,
      [propertyName]: event.target.value,
    }));
  };

  // re-render the component each time the state changes
  useEffect(() => {}, [customerInfo]);

  // handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await service.createAccount(customerInfo);
    if (response.status === 200) {
      console.log("Customer form: creation success!");
    } else {
      // otherwise creation failed with an error message
      console.log("Error: account creation failed.");
    }
  };

  return (
    <Container>
      <h1>Create Account</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="form.Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={customerInfo.name}
            onChange={(e) => updateCustomer(e, "name")}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.Address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={customerInfo.address}
            onChange={(e) => updateCustomer(e, "address")}
            placeholder="Enter your address"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.Phonenumber">
          <Form.Label>Phonenumber</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            value={customerInfo.phoneNumber}
            onChange={(e) => updateCustomer(e, "phoneNumber")}
            placeholder="Enter your Phone #"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.Username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={customerInfo.username}
            onChange={(e) => updateCustomer(e, "username")}
            placeholder="Enter your username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="form.Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={customerInfo.password}
            onChange={(e) => updateCustomer(e, "password")}
            placeholder="Enter your password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.Initialdeposit">
          <Form.Label>Initial deposit</Form.Label>
          <Form.Control
            type="text"
            name="initialDeposit"
            value={customerInfo.initialDeposit}
            onChange={(e) => updateCustomer(e, "initialDeposit")}
            placeholder="Enter your initial deposit"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreateCustomerForm;
