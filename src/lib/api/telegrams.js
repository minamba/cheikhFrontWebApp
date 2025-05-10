import axios from "axios";

export const sendMessage = async (message) => {

    try {
    return await axios.post("/Telegram/send", message);
    } catch (error) {
        console.log("erreur lors de l'envoi du message via le bot", error.message); 
        throw error;
    }
}
