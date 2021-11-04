import axios from "axios";
import { useEffect, useState } from "react"

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)


    useEffect(() => {
        axios.get(url, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error.response.data)
                
            })
    }, [url])
    return (data)
}

export default useRequestData;