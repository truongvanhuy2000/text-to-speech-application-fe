import axios from "axios";

const AxiosConfig = () => {
    axios.defaults.baseURL = process.env.REACT_APP_SERVER_BACKEND
}

export default AxiosConfig