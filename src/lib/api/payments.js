import axios from "axios";

export const getPayments = () => {
    return axios.get("/Payment/payments");
}

export const addPayment = async (payment) => {
    try {
        return await axios.post("/Payment/payment", payment);
    } catch (error) {
        console.log("Erreur lors de l'ajout du paiement", error.message);
        throw error;
    }
}

export const updatePayment = (payment) => {
    return axios.put("/Payment/payment", payment);
}

export const deletePayment = (idPayment) => {
    return axios.delete(`/Payment/${idPayment}`);
}
