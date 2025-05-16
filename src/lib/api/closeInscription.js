import axios from "axios";

export const getCloseInscription = () => {
    return axios.get("/closeinscription");
}

export const updateCloseInscription = (closeInscription) => {
    console.log("ce que j'envoie a l'api", closeInscription);
    return axios.put("/closeinscription", closeInscription);
}

