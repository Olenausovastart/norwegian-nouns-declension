import axios from 'axios';

async function fetchDataFromAPI(searchQuery) {
    try {
        const response = await axios.get(`https://api.example.com/search?q=${searchQuery}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
