import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToHomePage } from "../routers/Coordinator";

const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToHomePage(history)
        }
    }, [history])
}

export default useUnprotectedPage;