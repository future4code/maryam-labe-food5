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

export default signUp;