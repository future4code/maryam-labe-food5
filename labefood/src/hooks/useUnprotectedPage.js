import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToUpEndereco } from "../routers/Coordinator";

const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToUpEndereco(history)
        }
    }, [history])
}

export default useUnprotectedPage;