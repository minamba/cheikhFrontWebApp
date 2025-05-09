import axios from "axios";

export const getSeminaires = () => {
    return axios.get("/seminaires/seminaires");
}

export const addSeminaire = (seminaire) => {
    return axios.post("/seminaires/seminaire", seminaire);
}

export const updateSeminaire = (seminaire) => {
    return axios.put("/seminaires/seminaire", seminaire);
}

export const deleteSeminaire = (idSeminaire) => {
    return axios.delete(`/seminaires/${idSeminaire}`);
}
