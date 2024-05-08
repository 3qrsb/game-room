import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c3f1686792f94241a3ae3d64ea2b6047'
    }
});