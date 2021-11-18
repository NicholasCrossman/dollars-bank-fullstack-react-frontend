import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import CustomerService from "../service/CustomerService";

const Transfer = (props) => {
  // save the form input
  const [transferInfo, setTransferInfo] = useState({
    amount: "",
  });

  const [service] = useState(new CustomerService());

  // update the state with each change to the form
  const updateTransfer = (event, name) => {
    const target = event.target;
    console.log(target);

    event.preventDefault();
    setTransferInfo((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  // re-render the component each time the state changes
  useEffect(() => {}, [transferInfo]);

  // handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await service.transfer(transferInfo);
    if (response.status === 201) {
      console.log("Transfer success!");
    } else {
      // otherwise withdraw failed with an error message
      console.log("Error: Transfer  failed.");
    }
  };

  //   handleChange = (id) => {
  //     this.setState({
  //       selectedValue: id,
  //     });
  //   };
  //   this.state.lists.map((list)=> {
  return (
    <Container>
      <h1>Transfer</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="form.Amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            name="amount"
            value={transferInfo.amount}
            onChange={(e) => updateTransfer(e, "amount")}
            placeholder="Enter your amount"
          />
        </Form.Group>

        <InputGroup className="mb-3">
          <InputGroup.Radio aria-label="Radio button for following text input" />
          <InputGroup.Radio aria-label="Radio button for following text input" />
          texts
        </InputGroup>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Transfer;
