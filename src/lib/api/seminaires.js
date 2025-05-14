import axios from "axios";

export const getSeminaires = () => {
    return axios.get("/seminaires");
}

export const addSeminaire = (seminaire) => {
    return axios.post("/seminaire", seminaire);
}

export const updateSeminaire = (seminaire) => {
    return axios.put("/seminaire", seminaire);
}

export const deleteSeminaire = (idSeminaire) => {
    return axios.delete(`/seminaires/${idSeminaire}`);
}
