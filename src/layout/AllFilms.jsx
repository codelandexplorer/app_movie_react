// src/components/AllFilms.js
import React, { useEffect, useState } from 'react';
import fetchFilms from '../servises/api';
import '../styles/allFilms.css';
import '../components/Buttons/MoreBtn';
import MoreBtn from '../components/Buttons/MoreBtn';

const AllFilms = () => {
    const [films, setFilms] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchFilms();
                console.log('Films data:', result);
                setFilms(result.items);
            } catch (error) {
                console.error('Error fetching films:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {films && (
                <div className="container mt-5">
                    <div className="row">
                        {films &&
                            films.map((film) => (
                                <div
                                    key={film.kinopoiskId}
                                    className="col-md-3 mb-4">
                                    <div className="card h-100">
                                        <img
                                            className="card-img-top img-fluid"
                                            src={film.posterUrl}
                                            alt={film.nameRu}
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="card-body py-3 ">
                                            <h5 className="card-title">
                                                {film.nameRu}
                                            </h5>
                                            <p className="rating">
                                                Рейтинг: {film.ratingKinopoisk}
                                            </p>
                                            <p>Год: {film.year}</p>
                                            <p>
                                                Страна:{' '}
                                                {film.countries[0].country}
                                            </p>
                                        </div>
                                        <div className="card-footer">
                                            <MoreBtn />
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllFilms;
