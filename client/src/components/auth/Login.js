import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Login extends React.Component {
    render() {
        return(
            <>
            
            <Container>
                <Row>
                    <NavLink>Users</NavLink>
                </Row>
                <Row>
                    <Button variant="outline-info">Login</Button>

                </Row>
            </Container>
            </>
        )
    }
}

export default Login;