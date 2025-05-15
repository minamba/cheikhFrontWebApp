import axios from "axios";

export const getMedias = () => {
    return axios.get("/medias");
}

export const addMedia = (media) => {
    return axios.post("/media", media);
}

export const updateMedia = (media) => {
    return axios.put("/media", media);
}

export const deleteMedia = (idMedia) => {
    return axios.delete(`/Medias/${idMedia}`);
}