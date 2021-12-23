import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID RwaTqozcmx6QZlEUDEXqvEOi4BPXYoHJBpP9-CvZBIo',
  },
});
