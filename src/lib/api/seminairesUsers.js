import axios from "axios";

export const getSeminaires = () => {
    return axios.get("/SeminaireUsers/SeminaireUsers");
}

export const addSeminaire = async (seminaire) => {

    try {
        return await axios.post("/SeminaireUsers/SeminaireUser", seminaire);
    } catch (error) {
        console.log("Erreur lors de l'ajout du l'utilisateur sur la liste d'attente du prochain seminaire", error.message);
        throw error;
    }
}

export const updateSeminaire = (seminaire) => {
    return axios.put("/SeminaireUsers/SeminaireUser", seminaire);
}

export const deleteSeminaire = (idSeminaire) => {
    return axios.delete(`/SeminaireUsers/${idSeminaire}`);
}
