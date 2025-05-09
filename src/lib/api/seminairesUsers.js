import axios from "axios";

export const getSeminaires = () => {
    return axios.get("/SeminaireUsers/SeminaireUsers");
}

export const addSeminaire = (seminaire) => {
    return axios.post("/SeminaireUsers/SeminaireUser", seminaire);
}

export const updateSeminaire = (seminaire) => {
    return axios.put("/SeminaireUsers/SeminaireUser", seminaire);
}

export const deleteSeminaire = (idSeminaire) => {
    return axios.delete(`/SeminaireUsers/${idSeminaire}`);
}
