import axios from "axios";

export const getRegistrations = () => {
    return axios.get("/Registration/registrations");
}

export const addRegistration = (registration) => {
    return axios.post("/Registration/registration", registration);
}

export const updateRegistration = (registration) => {
    return axios.put("/Registration/registration", registration);
}

export const deleteRegistration = (idRegistration) => {
    return axios.delete(`/Registration/${idRegistration}`);
}

