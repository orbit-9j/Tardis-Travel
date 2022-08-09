import React, { useState } from "react";
import Form from "../components/Form";

/* page not finished yet */

/* code adapted from https://www.youtube.com/watch?v=tIdNeoHniEY */
function Checkout() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expirationDate: "",
    CVV: "",
    house: "",
    street: "",
    city: "",
    postcode: "",
    country: "",
    planet: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "John Doe",
      errorMessage:
        "Name should be 3-16 characters long and shouldn't include special characters",
      label: "Name",
      pattern: "^[A-Za-z0-9]{2,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email@email.com",
      errorMessage: "Enter a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "cardNumber",
      type: "number",
      placeholder: "1234-5678-9012",
      errorMessage: "Enter 12 the digits on your card",
      label: "Card Number",
      pattern: "/^[0-9]{12}$/",
      required: true,
    },
    {
      id: 4,
      name: "expirationDate",
      type: "month",
      label: "Expiration Date",
      required: true,
    },
    {
      id: 5,
      name: "CVV",
      type: "password",
      placeholder: "123",
      errorMessage: "Enter the 3 digits on the back of your card",
      label: "CVV",
      pattern: "/^[0-9]{3}$/",
      required: true,
    },
    {
      id: 6,
      name: "house",
      type: "text",
      placeholder: "42",
      errorMessage: "",
      label: "Dwelling",
      required: true,
    },
    {
      id: 7,
      name: "street",
      type: "text",
      placeholder: "Wallaby Way",
      errorMessage: "",
      label: "Street",
      required: true,
    },
    {
      id: 8,
      name: "city",
      type: "text",
      placeholder: "city",
      errorMessage: "",
      label: "City",
      required: true,
    },
    {
      id: 9,
      name: "postcode",
      type: "text",
      placeholder: "postcode",
      errorMessage: "",
      label: "Postcode",
      required: true,
    },
    {
      id: 10,
      name: "country",
      type: "text",
      placeholder: "country",
      errorMessage: "",
      label: "Country",
      required: true,
    },
    {
      id: 11,
      name: "planet",
      type: "text",
      placeholder: "Gallifrey",
      errorMessage: "",
      label: "Planet",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  /* need card number to automatically separate using dashes */
  /* add patterns to all */
  /* fill in the placeholders */
  /* mobile view */
  /* add submit success screen/overlay */

  return (
    <div className="checkout">
      <form onSubmit={handleSubmit}>
        <h1>Enter your details</h1>
        <p>This is NOT a scam</p>
        <div className="form">
          {inputs.map((input) => (
            <Form
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Checkout;
