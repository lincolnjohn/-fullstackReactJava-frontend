import { REGISTER_ENDPOINT } from './../Utils/Endpoint';
import axios from "axios"

export const registerUser=(name: string, email: string, password: string) =>{
    return axios.post(REGISTER_ENDPOINT, {
        name, email, password
    });

}