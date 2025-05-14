import axios from "axios";

export const getThemes = () => {
    return axios.get("/themes");
}

export const addTheme = (theme) => {
    return axios.post("/theme", theme);
}

export const updateTheme = (theme) => {
    return axios.put("/theme", theme);
}

export const deleteTheme = (idTheme) => {
    return axios.delete(`/theme/${idTheme}`);
}