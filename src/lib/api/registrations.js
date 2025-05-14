import axios from "axios";

export const getRegistrations = () => {
    return axios.get("/registrations");
}

export const addRegistration = (registration) => {
    return axios.post("/registration", registration);
}

export const updateRegistration = (registration) => {
    return axios.put("/registration", registration);
}

export const deleteRegistration = (idRegistration) => {
    return axios.delete(`/registration/${idRegistration}`);
}

