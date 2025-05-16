import axios from "axios";

export const getPaymentPage = () => {
    return axios.get("/paymentpage");
}

export const updatePaymentPage = (paymentPage) => {
    console.log("ce que j'envoie a l'api", paymentPage);
    return axios.put("/paymentpage", paymentPage);
}

