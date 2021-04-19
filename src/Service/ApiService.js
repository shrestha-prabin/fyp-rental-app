import axios from "axios";

const baseURL = 'http://localhost:8000/api/'

class ApiService {

    async sendRequest(url, params) {
        let config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        };
        console.log('API Req:', url, params);

        return new Promise((resolve, reject) => {
            axios
                .post(`${baseURL}${url}`, params, config)
                .then((response) => {
                    console.log('API Res:', url, response.data);
                    if (response.data.success) {
                        resolve(response.data)
                    } else {

                        reject(response.data.error.message||response.data.error[Object.keys(response.data.error)[0]])

                    }
                })
                .catch((error) => {
                    console.error('API Err:', url, error.message);
                    reject(error.message)
                });
        })
    }

}

export default new ApiService()