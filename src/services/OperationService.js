import axios from "axios";

const URL = "http://localhost:8080/api/operations";
const POST_URL = "http://localhost:8080/api/record";

const getOperations = async () => {
    return await axios.get(URL);
}

const postOperation = async (data) => {
    console.log("post: " + JSON.stringify(data));
    return await axios.post(POST_URL, 
        data
    );
}

const OperationService = {
    getOperations,
    postOperation
};


export default OperationService;