import axios from "axios";
const CUR_URL= "http://localhost:8082/clients";


let idx=2
export default function fetchCurrency() {
    return axios.get("http://localhost:8082/clients");
}