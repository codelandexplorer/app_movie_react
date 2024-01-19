// src/components/Cards.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = ({ film }) => {
    if (!film) {
        return null;
    }

    const posterUrl = film.posterUrl || '';
    return (
        <div
            className="card"
            style={{ width: '16rem', height: '400px', overflow: 'hidden' }}>
            <img
                className="card-img-top"
                src={posterUrl}
                alt={film.nameRu}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <div className="card-body">
                <h3 className="card-title">{film.nameRu}</h3>
                <h5 className="rating">Рейтинг: {film.ratingKinopoisk}</h5>
                <h5 className="year"> Год: {film.year}</h5>
                <a href="#" className="btn btn-primary"></a>
            </div>
        </div>
    );
};

export default Cards;
