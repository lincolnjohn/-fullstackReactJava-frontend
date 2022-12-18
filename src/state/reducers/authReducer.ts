import { User } from "../../types";
import { authenticate } from "../../Utils/auth";
import { AuthActions } from "../actions/authActions";

export const authInitialState: User = authenticate()

export const AuthReducer = (state: User, action: AuthActions): User =>{
    switch (action.type) {
        case 'login':
            return state;

        case 'logout':
            return state;
    
        default:
            return state;
    }
}