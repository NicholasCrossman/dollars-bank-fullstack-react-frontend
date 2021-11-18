import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CustomerService from "../service/CustomerService";

//temp
const LoginForm = (props) => {
  // save the form input
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const [service] = useState(new CustomerService());

  // update the state with each change to the form
  const updateLogin = (event, name) => {
    const target = event.target;
    console.log(target);

    event.preventDefault();
    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  // re-render the component each time the state changes
  useEffect(() => {}, [loginInfo]);

  // handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await service.postLogin(loginInfo);
    //console.log("LoginResponse: " + JSON.stringify(response));
    if (response.status === 200) {
      // login succeeded
      // todo: redirect
      console.log("LoginForm: Login success!");
    } else {
      // otherwise login failed with an error message
      console.log("Error: login failed.");
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="form.Username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={loginInfo.name}
            onChange={(e) => updateLogin(e, "username")}
            placeholder="Enter username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="form.Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={(e) => updateLogin(e, "password")}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
