import axios from 'axios';
import { BASE_URL } from '../constants/urls'
import { goToHomePage } from '../routers/Coordinator';

export const login = (body, clear, history) => {
    axios.post(`${BASE_URL}/login`, body)
        .then((response)=>{
            localStorage.setItem("token", response.data.token)
            clear()
            goToHomePage(history)
        })
        .catch((error)=>{
            alert(error.response.message)
        })
}

