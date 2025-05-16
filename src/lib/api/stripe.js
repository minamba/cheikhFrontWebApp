import axios from 'axios';

export const sendStripePayment = (paymentData) => {
  console.log("CE QUE J'ENVOIE A STRIPE", paymentData);
  return axios.post("/payment/stripe", paymentData, {
    headers: {
      "Content-Type": "application/json"
    }
  });
};