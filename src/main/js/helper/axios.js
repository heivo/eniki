import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8081/',
    timeout: 3000,
    // auth: {
    //     username: 'browser',
    //     password: ''
    // },
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});