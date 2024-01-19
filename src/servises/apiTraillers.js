import axios from 'axios';

const API_BASE_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2';

// Функция для загрузки трейлера по id фильма
const fetchTrailerById = async (movieId) => {
    try {
        const response = await axios.get(
            `https://widgets.kinopoisk.ru/discovery/trailer/${movieId}/videos`,
            {
                params: {
                    api_key: 'f7929dde-4317-4090-86a6-4db4d27ebf7b',
                },
            }
        );

        return response.data.results;
    } catch (error) {
        console.error('Error fetching trailer:', error);
        throw error;
    }
};

export default fetchTrailerById;
