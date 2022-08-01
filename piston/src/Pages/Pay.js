import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


export default function Pay() {
  const [product] = React.useState({
    name: "Ecomers",
    price: 0,
    description: ""
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://payment-details-data.herokuapp.com/payment",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container">
      <StripeCheckout
        style={{ width:"240px" , height:"40px" }}
        stripeKey="pk_live_51LP26dSBRAW33Jd3AquO7Oo1UqEj9gQojVnldSfRzETjS8be7TMPB2qcIYrxcN7OmzAJROPrTbb1eGjN59YLKxUc00BnO0EK6F"
        token={handleToken}
        amount={product.price * 100}
        name="Ecommers"
        billingAddress
        shippingAddress
      />
    </div>
  );
}

