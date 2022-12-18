import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from './../Utils/Endpoint';
import axios from "axios"

export const registerUser=(name: string, email: string, password: string) =>{
    return axios.post(REGISTER_ENDPOINT, {
        name, email, password
    });

}

export const loginUser=(email: string, password: string) =>{
    return axios.post(LOGIN_ENDPOINT, {
        email, password
    });

}