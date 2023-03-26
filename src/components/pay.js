import { useState, useEffect, useRef } from "react";
import axios from "axios";
import './Payment.css'
import { CardElement, useStripe, useElements , Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Header from "./Header";
const stripePromise = loadStripe(
  "pk_test_51LrimFSG0cpPT0WstHixRc9F1Lvub1C4LFQ4g6ZTGAZ6L1Qx9rkqZgOgdYKcotBlJCIE4F3b3dZ4eyht5Vpiw7bI007AtDQH7Q"
);

const PaymentForm = () => {
  const [amount, setAmount] = useState(3500);
  const [clientSecret, setClientSecret] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  // useEffect(() => {
  //   const fetchStripeApiKey = async () => {
  //     try {
  //       const response = await axios.get("/api/v1/stripeApiKey");
  //       const stripe = window.Stripe(response.data.stripeApiKey);
  //       const { data } = await axios.post("/api/v1/processPayment", { amount });
  //       setClientSecret(data.client_secret);
  //     } catch (error) {
  //       setErrorMessage(error.response.data.error);
  //     }
  //   };

  //   fetchStripeApiKey();
  // }, [amount]);

  const paymentData = {
    amount: Math.round(1000),
  };
  const cur = "inr";
  const amount1 = 3500;

  const handleSubmit = () => {
      
    }
    // const checkoutButton = document.getElementByld("btn");

    // checkoutButton.addEventListener("click", )
    // try {
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   };
    //   const { data } = await axios.post(
    //     "http://localhost:4500/api/v1/payment/process",
    //     paymentData,
    //     config
    //   );

    //   const client_secret = data.client_secret;

    //   if (!stripe || !elements) return;

    //   const result = await stripe.confirmCardPayment(client_secret, {
    //     payment_method: {
    //       card: elements.getElement(CardElement),
    //       billing_details: {
    //         email: "jay@gmail.com",
    //       },
    //     },
    //   });

    //   if (result.error) {
    //     payBtn.current.disabled = false;
    //   } else {
        
    //   }
    // } catch (error) {
    //   payBtn.current.disabled = false;
    //   // alert.error(error.response.data.message);
    // }
  // };

  return (
    <>
      <Header />
      <div class="flex justify-center mt-8">
        <div class="flex flex-col max-h-screen w-9/12 justify-center">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="card-element"
                className="text-2xl mb-2 text-center md-4"
              >
                Card details
              </label>
              <div className="border border-gray-300 p-2 rounded">
                <CardElement id="card-element" />
              </div>
            </div>
            {errorMessage && (
              <div className="text-red-600 mb-4">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="text-green-600 mb-4">{successMessage}</div>
            )}
            <div class="text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
                type="submit" id="btn"
                disabled={!stripe || !elements}
              >
                Pay Now
              </button>
            </div>
          </form>
          <div className="flex flex-col mt-4">
            <label htmlFor="amount" className="text-sm mb-2">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              min="1"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="border border-gray-300 p-2 rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const PaymentForm2 = () => {
return (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);
}
export default PaymentForm2;
