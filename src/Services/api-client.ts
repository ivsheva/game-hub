import axios from "axios";

export interface FetchResponse<T>{
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5629f1dec83f400d87e835377a3c3d84"
    }
})