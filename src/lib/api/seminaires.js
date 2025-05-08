import axios from "axios";

export const getSeminaires = () => {
    return axios.get("/Seminaire/seminaires");
}

export const addSeminaire = (seminaire) => {
    return axios.post("/Seminaire/seminaire", seminaire);
}

export const updateSeminaire = (seminaire) => {
    return axios.put("/Seminaire/seminaire", seminaire);
}

export const deleteSeminaire = (idSeminaire) => {
    return axios.delete(`/Seminaire/${idSeminaire}`);
}
