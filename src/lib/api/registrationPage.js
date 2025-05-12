import axios from "axios";

export const getRegistrationPage = () => {
    return axios.get("/RegistrationPage/registration");
}

export const updateRegistrationPage = (registrationPage) => {
    console.log("ce que j'envoie a l'api", registrationPage);
    return axios.put("/RegistrationPage/registration", registrationPage);
}

