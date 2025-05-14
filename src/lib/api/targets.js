import axios from "axios";

export const getTargets = () => {
    return axios.get("/targets");
}

export const addTarget = (target) => {
    return axios.post("/target", target);
}

export const updateTarget = (target) => {
    return axios.put("/target", target);
}

export const deleteTarget = (idTarget) => {
    return axios.delete(`/target/${idTarget}`);
}