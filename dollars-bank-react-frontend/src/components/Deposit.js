import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CustomerService from "../service/CustomerService";

const Deposit = (props) => {
  // save the form input
  const [depositInfo, setDepositInfo] = useState({
    amount: "",
  });

  const [service] = useState(new CustomerService());

  // update the state with each change to the form
  const updateDeposit = (event, name) => {
    const target = event.target;
    console.log(target);

    event.preventDefault();
    setDepositInfo((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  // re-render the component each time the state changes
  useEffect(() => {}, [depositInfo]);

  // handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await service.deposit(setDepositInfo);
    if (response.status === 200) {
      console.log("Deposit success!");
    } else {
      // otherwise deposit failed with an error message
      console.log("Error: Deposit  failed.");
    }
  };

  return (
    <Container>
      <h1>Deposit</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="form.Amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            name="amount"
            value={depositInfo.amount}
            onChange={(e) => updateDeposit(e, "amount")}
            placeholder="Enter your Deposit"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Deposit;
