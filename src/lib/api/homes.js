import axios from "axios";

export const getHomes = () => {
    return axios.get("/homes");
}

export const addHome = (home) => {
    return axios.post("/homes/home", home);
}

export const updateHome = (home) => {
    return axios.put("/homes/home", home);
}

// export const deleteRegistration = (idRegistration) => {
//     return axios.delete(`/Registration/${idRegistration}`);
// }