import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CustomerService from "../service/CustomerService";
import { useNavigate } from "react-router";

const Withdraw = (props) => {
  // save the form input
  const [withdrawInfo, setWithdrawInfo] = useState({
    amount: "",
  });

  const [service] = useState(new CustomerService());
  let navigate = useNavigate();

  // update the state with each change to the form
  const updateWithdraw = (event, name) => {
    const target = event.target;
    console.log(target);

    event.preventDefault();
    setWithdrawInfo((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  // re-render the component each time the state changes
  useEffect(() => {}, [withdrawInfo]);

  // handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await service.withdraw(withdrawInfo);
    if (response.status === 201) {
      console.log("withdraw success!");
      navigate("/account");
    } else {
      // otherwise withdraw failed with an error message
      console.log("Error: withdraw  failed.");
    }
  };

  return (
    <Container>
      <h1>Withdraw</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="form.Amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            name="amount"
            value={withdrawInfo.amount}
            onChange={(e) => updateWithdraw(e, "amount")}
            placeholder="Enter your amount"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Withdraw;
