import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import CustomerService from "../service/CustomerService";

const Transfer = (props) => {
  // save the form input
  const [transferInfo, setTransferInfo] = useState({
    amount: "",
    recieverId: 0,
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

  const [customers, setCustomers] = useState([]);

  //update once when component loads
  // get all the OTHER customers
  useEffect(() => {
    getAllCustomers();
  }, []);

  // get the all the other customers and verify response
  // set the state of customers with the response
  const getAllCustomers = async () => {
    //REMOVE THIS WHEN ITS COMPONENTS ARE CONNECTED ******
    service.postLogin({ username: "username1", password: "password" });
    let response = await service.getAllOtherCustomers();
    //console.log("LoginResponse: " + JSON.stringify(response));
    if (response.status === 200) {
      console.log("GetAllOthercustomers: Login success!");
      console.log(JSON.stringify(response.data));

      setCustomers(response.data);
    } else {
      // otherwise login failed with an error message
      console.log("Error: GetAllOthercustomers failed.");
    }
  };

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

        <div className="container">
          <h4 className="p-3 text-center"> Select the Transfer Recepient</h4>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Address</th>
                <th>Selected</th>
              </tr>
            </thead>
            <tbody>
              {customers &&
                customers.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.name}</td>
                    <td>{customer.username}</td>
                    <td>{customer.address}</td>
                    <td>
                      <input
                        name="recieverId"
                        // key={item}
                        // id={item}
                        value={customer.id}
                        type="radio"
                        onChange={(e) => updateTransfer(e, "recieverId")}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Transfer;

{
  /* {customers.map((item) => (
          <tr key={item.username}>
            {Object.values(item).map((val) => (
              <td>{val}</td>
            ))}
          </tr>
        ))} */
}
{
  /* <InputGroup className="mb-3">
<label htmlFor={item}> {item}</label>
<InputGroup.Radio name="temp" key={item} id={item} value={item} />
</InputGroup> */
}

{
  /* <h4> Select the Transfer Recepient</h4>
        {customers.map((item) => (
          <React.Fragment>
            <label htmlFor={item}> {item}</label>
            <input
              name="recieverId"
              // key={item}
              // id={item}
              value={item}
              type="radio"
              onChange={(e) => updateTransfer(e, "recieverId")}
            />
            <br></br>
          </React.Fragment>
        ))} */
}
{
  /* <table>
<tr key={"header"}>
  {Object.keys(customers[0]).map((key) => (
    <th>{key}</th>
  ))}
</tr>
{customers.map((item) => (
  <tr key={item.id}>
    {Object.values(item).map((val) => (
      <td>{val}</td>
    ))}
  </tr>
))}
</table> */
}

// <div className="container">
//           <h4 className="p-3 text-center"> Select the Transfer Recepient</h4>
//           <table className="table table-striped table-bordered">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Username</th>
//                 <th>Address</th>
//                 <th>Selected</th>
//               </tr>
//             </thead>
//             <tbody>
//               {customers &&
//                 customers.map((customer) => (
//                   <tr key={customer.id}>
//                     <td>{customer.name}</td>
//                     <td>{customer.username}</td>
//                     <td>{customer.address}</td>
//                     <td>
//                       <input
//                         name="recieverId"
//                         // key={item}
//                         // id={item}
//                         value={customer.id}
//                         type="radio"
//                         onChange={(e) => updateTransfer(e, "recieverId")}
//                       />
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
