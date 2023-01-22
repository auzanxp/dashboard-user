import Axios from 'axios';

export default Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const config = {
    api_host: 'https://api-beta.solubis.com',
};
