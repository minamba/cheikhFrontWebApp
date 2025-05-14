import axios from "axios";

export const getWitnesses = () => {
    return axios.get("/witnesses");
}

export const addWitness = (witness) => {
    return axios.post("/witness", witness);
}

export const updateWitness = (witness) => {
    return axios.put("/witness", witness);
}

export const deleteWitness = (idWitness) => {
    return axios.delete(`/witness/${idWitness}`);
}