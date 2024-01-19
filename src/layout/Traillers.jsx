import React, { useEffect, useState } from 'react';
import axios from 'axios';
import fetchTrailerById from '../path-to-fetchTrailerById'; // Укажите правильный путь

const MovieTrailers = ({ movieId }) => {
    const [trailers, setTrailers] = useState([]);

    useEffect(() => {
        const fetchTrailers = async () => {
            try {
                const trailersData = await fetchTrailerById(movieId);
                setTrailers(trailersData);
            } catch (error) {
                console.error('Error fetching trailers:', error);
            }
        };

        fetchTrailers();
    }, [movieId]);
};

export default MovieTrailers;
