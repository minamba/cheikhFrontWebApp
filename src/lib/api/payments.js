import axios from "axios";

export const getPayments = () => {
    return axios.get("/Payment/payments");
}

export const addPayment = (payment) => {
    return axios.post("/Payment/payment", payment);
}

export const updatePayment = (payment) => {
    return axios.put("/Payment/payment", payment);
}

export const deletePayment = (idPayment) => {
    return axios.delete(`/Payment/${idPayment}`);
}
