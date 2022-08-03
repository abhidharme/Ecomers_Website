import React , {useState , useEffect} from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";

import "react-toastify/dist/ReactToastify.css";


export default function Pay() {

  var { cart } = useSelector((state) => state.cart);

const [datat , setDatat ] = useState([]);

var X = cart.length;

const addorders = ()=>{
  for(var i=0 ; i<X ; i++){
    datat.push(cart[i])
  }

}
    
  

 
  const [product] = React.useState({
    name: "Ecomers",
    price: 28,
    description: datat
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
    <div>
    <h1>Total Price = {product.price * 100}</h1>
    <br></br>
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

