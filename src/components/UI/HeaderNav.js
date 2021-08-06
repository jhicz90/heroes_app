import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

export const HeaderNav = () => {
    return (
        <Navbar sticky="top" bg="light" expand="md">
            <Container>
                <Link to={`/`}className="navbar-brand">
                    <img
                        src="/assets/logo.png"
                        width="132"
                        height="64"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to={`/`} exact className="nav-link" activeClassName="active">ASOCIACIONES</NavLink>
                        <NavLink to={`/marvel`} exact className="nav-link" activeClassName="active">MARVEL</NavLink>
                        <NavLink to={`/dc`} exact className="nav-link" activeClassName="active">DC</NavLink>
                        <NavLink to={`/search`} exact className="nav-link" activeClassName="active">BUSCAR</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink to={`/login`} exact className="nav-link" activeClassName="active">Cerrar sesión</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
