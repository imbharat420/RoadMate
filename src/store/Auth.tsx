import {createContext, useContext, useReducer} from 'react';

export const AuthContext = createContext(null);
export const useAuth = () => {
  return useContext(AuthContext);
};

const initialState = {
  user: null,
  token: null,
  isAuth: false,
  isLoading: false,
  error: null,
  success: null,
  message: null,
  isVerified: false,
  isRegistered: false,
};

type actionType = {
  type: string;
  payload: {
    user: any;
    token: any;
    isAuth: boolean;
    isLoading: boolean;
    error: any;
    success: any;
    message: any;
    isVerified: boolean;
    isRegistered: boolean;
  };
};

const reducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
        isLoading: false,
        error: null,
        success: true,
        message: action.payload.message,
        isVerified: action.payload.isVerified,
        isRegistered: action.payload.isRegistered,
      };
    default:
      return state;
  }
};

const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
