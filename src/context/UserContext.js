import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [state, setState] = useState({
        user: {},
        token: ""
    });

    useEffect(() => {
        setState(JSON.parse(window.localStorage.getItem("auth")));
        //setState(window.localStorage.getItem("auth"));
    }, []);

    const navigate = useNavigate();

    const token = state && state.token ? state.token : "";

    axios.defaults.baseURL = "http://localhost:8080/api/operations";
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios.interceptors.response.use(
        function(response){
            //console.log("123: " + JSON.stringify(response));
            return response;
        }, 
        /*function(err){
            //console.log("AQUI", err);
            let res = err.response;
            //console.log("AQUI", res);
            if(res.status === 401 && res.config && !res.config.__isRetryRequest){
                setState(null);
                window.localStorage.removeItem("auth");
                navigate("/")
            }
        }*/
    );

    return (
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    );

};

export {UserContext, UserProvider};