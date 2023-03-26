import React, { Fragment, useEffect, useRef } from "react";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import "./Payment.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Header from "./Header";
// import { createOrder, clearErrors } from "../../actions/orderAction";
// import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51LrimFSG0cpPT0WstHixRc9F1Lvub1C4LFQ4g6ZTGAZ6L1Qx9rkqZgOgdYKcotBlJCIE4F3b3dZ4eyht5Vpiw7bI007AtDQH7Q"
);

const Payment = () => {
//   const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
// //   const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();
//   const payBtn = useRef(null);

//   const paymentData = {
//     amount: Math.round(100),
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     payBtn.current.disabled = true;

//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const { data } = await axios.post(
//         "/api/v1/payment/process",
//         paymentData,
//         config
//       );

//       const client_secret = data.client_secret;

//       if (!stripe || !elements) return;

//       const result = await stripe.confirmCardPayment(client_secret, {
//         payment_method: {
//           card: elements.getElement(CardNumberElement),
//           billing_details: {
//             name: user.name,
//             email: user.email,
//             address: {
//               line1: shippingInfo.address,
//               city: shippingInfo.city,
//               state: shippingInfo.state,
//               postal_code: shippingInfo.pinCode,
//               country: shippingInfo.country,
//             },
//           },
//         },
//       });

//       if (result.error) {
//         payBtn.current.disabled = false;

//         alert.error(result.error.message);
//       } else {
//         if (result.paymentIntent.status === "succeeded") {
//           order.paymentInfo = {
//             id: result.paymentIntent.id,
//             status: result.paymentIntent.status,
//           };

//           dispatch(createOrder(order));

//           navigate("/success");
//         } else {
//           alert.error("There's some issue while processing payment ");
//         }
//       }
//     } catch (error) {
//       payBtn.current.disabled = false;
//       alert.error(error.response.data.message);
//     }
//   };

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//   }, [dispatch, error, alert]);

  return (
      <Fragment>
          <Header/>
      <div className="paymentContainer">
        {/* <form className="paymentForm" onSubmit={(e) => submitHandler(e)}> */}
        <form className="paymentForm">
          Card Info
          <div>
            <CreditCardIcon />
            {/* <CardNumberElement className="paymentInput" /> */}
          </div>
          <div>
            {/* <EventIcon /> */}
            {/* <CardExpiryElement className="paymentInput" /> */}
          </div>
          <div>
            {/* <VpnKeyIcon /> */}
            {/* <CardCvcElement className="paymentInput" /> */}
          </div>

          <input
            type="submit"
            // value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
            // ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

// const Wrapper = (props) => (
//   <Elements stripe={stripePromise}>
//     <Payment {...props} />
//   </Elements>
// );

// export default Wrapper;
export default Payment;
