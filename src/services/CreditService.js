import axios from "axios";

const URL = "http://localhost:8080/api/credit";

const getCredit = async () => {
    return await axios.get(URL);
}

const CreditService = {
    getCredit
};

export default CreditService;