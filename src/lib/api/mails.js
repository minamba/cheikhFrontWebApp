import axios from "axios";

//SEMINAIRE
export const sendSeminaireMail = async (rcpt) => {

    try {
    return await axios.post("/send/seminaire", rcpt);
    } catch (error) {
        console.log("erreur lors de l'envoi du mail", error.message); 
        throw error;
    }
}

export const sendSeminaireMailGroup = async (rcptList) => {

    try {
    return await axios.post("/send/seminaire/group", rcptList);
    } catch (error) {
        console.log("erreur lors de l'envoi des mails", error.message); 
        throw error;
    }

}

    //PAYMENT
    export const sendPaymentMail = async (rcpt) => {

        try {
        return await axios.post("/send/payment", rcpt);
        } catch (error) {
            console.log("erreur lors de l'envoi du mail", error.message); 
            throw error;
        }
    }
    
    export const sendPaymentMailGroup = async (rcptList) => {
    
        try {
        return await axios.post("/send/payment/group", rcptList);
        } catch (error) {
            console.log("erreur lors de l'envoi des mails", error.message); 
            throw error;
        }

}
