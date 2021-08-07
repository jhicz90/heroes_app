import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const HeaderNav = () => {

    const { user_login, dispatch } = useContext(AuthContext)
    const history = useHistory()

    const handleLogout = () => {
        history.replace('/')

        dispatch({
            type: types.logout
        })
    }

    return (
        <Navbar sticky="top" bg="light" expand="md">
            <Container>
                <Link to={`/`} className="navbar-brand">
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
                        <Navbar.Text className="text-primary user-select-none">
                            {user_login.name}
                        </Navbar.Text>
                        {
                            user_login.logged
                                ?
                                <Nav.Link onClick={handleLogout}>Cerrar sesión</Nav.Link>
                                :
                                <NavLink to={`/login`} exact className="nav-link" activeClassName="active">Inicar sesión</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
