
import axios from "axios"
import { goToUpEndereco } from "../routers/Coordinator"



const signUp = (body, clear, history) => {
   
    const URL_BASE = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/signup"

          axios.post(`${URL_BASE}`,  {
              headers:'Content-Type: application/json'
          })
          .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToUpEndereco(history)
 
          })
          .catch((err) => {
              alert(err.response)
          })
}


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


