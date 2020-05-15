import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID UKUxNUj-w54BbqH-PNxYA56pmB3W9a3tZSnx-2Yqq6w'

    }
})