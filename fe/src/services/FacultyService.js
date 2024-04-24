import axios from "axios"
import { axiosJWT } from "./UserService"

export const createFaculty = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/faculty/create`, data)
    return res.data
}

export const updateFaculty = async (id, access_token, data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/faculty/update/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const deleteFaculty = async (id, access_token) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/faculty/delete/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const deleteManyFaculty = async (data, access_token,) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/faculty/delete-many`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getDetailsFaculty = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/faculty/get-details/${id}`)
    return res.data
}

// export const getDetailsFaculty = async (id, access_token) => {
//     try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/faculty/${id}`, {
//             headers: {
//                 Authorization: `Bearer ${access_token}`,
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error("There was an error fetching the faculty details", error);
//         throw error;
//     }
// }

export const getAllFaculty = async (access_token) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/faculty/get-all`, { 
        headers: {
            token: `Bearer ${access_token}`,
        }
    },)
    return res.data
}