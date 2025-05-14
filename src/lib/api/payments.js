import axios from "axios";

export const getPayments = () => {
    return axios.get("/payments");
}

export const addPayment = async (payment) => {
    try {
        return await axios.post("/payment", payment);
    } catch (error) {
        console.log("Erreur lors de l'ajout du paiement", error.message);
        throw error;
    }
}

export const updatePayment = (payment) => {
    return axios.put("/payment", payment);
}

export const deletePayment = (idPayment) => {
    return axios.delete(`/payment/${idPayment}`);
}
