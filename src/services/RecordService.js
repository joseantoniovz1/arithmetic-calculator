
import axios from "axios";

const RECORD_URL = "http://localhost:8080/api/records";

const getRecords = async () => {
    return await axios.get(RECORD_URL);
}

const RecordService = {
    getRecords
};

export default RecordService;