import axios from "axios";

export const getSessions = () => {
    return axios.get("/sessions");
}

export const addSession = (session) => {
    return axios.post("/session", session);
}

export const updateSession = (session) => {
    return axios.put("/session", session);
}

export const deleteSession = (idSession) => {
    return axios.delete(`/session/${idSession}`);
}