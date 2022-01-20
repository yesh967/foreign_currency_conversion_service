import axios from "axios";
const CUR_URL= "http://localhost:8080/clients";



export default function fetchCurrency() {
    return axios.get(CUR_URL);
}