import axios from "axios";

export const getAllUser = async () => {
    return await axios.get(process.env.REACT_APP_API);
}

export const getOneUser = async (id) => {
    return await axios.get(process.env.REACT_APP_API+`/${id}`)
}

export const createUser = async (name) => {
    return await axios.post(process.env.REACT_APP_API, name)
}

export const deleteUser = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_API}/${id}`);
}

export const updateUser = async (id, name) => {
    return await axios.put(process.env.REACT_APP_API+`/${id}`, name)
}

