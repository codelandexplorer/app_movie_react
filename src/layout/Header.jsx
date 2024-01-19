import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../components/Search';
import SignInBtn from '../components/Buttons/SignInBtn';
import RegBtn from '../components/Buttons/RegBtn';

const Header = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            style={{ paddingLeft: '20px', paddingRight: '20px' }}>
            <Navbar.Brand href="#home" style={{ marginLeft: '16px' }}>
                AppMovie
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                    className="mx-auto"
                    style={{
                        marginLeft: 'auto',
                    }}>
                    <Nav.Link href="#about" className="mx-3">
                        Фильмы
                    </Nav.Link>
                    <Nav.Link href="#home" className="mx-3">
                        Новые
                    </Nav.Link>
                    <Nav.Link href="#features" className="mx-3">
                        Жанры
                    </Nav.Link>
                    <Nav.Link href="#about" className="mx-3">
                        Избранное
                    </Nav.Link>
                    <Nav.Link href="#about" className="mx-3">
                        О нас
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Search />
            <div className="d-flex align-items-center mx-3">
                <SignInBtn />
                <RegBtn />
            </div>
        </Navbar>
    );
};

export default Header;
