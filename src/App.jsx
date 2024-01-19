import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
import AllFilms from './layout/AllFilms';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

function App() {
    return (
        <>
            <Header />
            <Main />
            <AllFilms />
        </>
    );
}

export default App;
