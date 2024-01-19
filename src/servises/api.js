import axios from 'axios';

const API_BASE_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2';
const fetchFilms = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/films`, {
            params: {
                order: 'RATING',
                type: 'ALL',
                ratingFrom: 0,
                ratingTo: 10,
                yearFrom: 2010,
                yearTo: 2024,
                page: 2,
            },
            headers: {
                Accept: 'application/json',
                'X-API-KEY': 'f7929dde-4317-4090-86a6-4db4d27ebf7b',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching films:', error);
        throw error;
    }
};

export default fetchFilms;
