import axios from "axios";

export const getRegistrationPage = () => {
    return axios.get("/registrationPage");
}

export const updateRegistrationPage = (registrationPage) => {
    console.log("ce que j'envoie a l'api", registrationPage);
    return axios.put("/registrationPage", registrationPage);
}

export const addRegistrationPage = (registrationPage) => {
    console.log("ce que j'envoie a l'api", registrationPage);
    return axios.post("/registrationPage", registrationPage);
}
