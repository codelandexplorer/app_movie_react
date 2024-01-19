import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {
    return (
        <nav className="navbar mx-1" style={{ marginRight: '40px' }}>
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Название фильма, сериала..."
                        aria-label="Search"
                        style={{ width: '280px' }}
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Поиск
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Search;
