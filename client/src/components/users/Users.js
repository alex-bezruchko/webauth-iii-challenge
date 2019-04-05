import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import axios from 'axios';

class Users extends React.Component {
    
    state = {
        users: []
    }
    componentDidMount() {

        const headers = { authorization: localStorage.getItem('jwt') };
        const endpoint = 'http://localhost:5000/api/users/';
        axios
            .get(endpoint, { headers })
            .then(res => {
                this.setState({ users: res.data })
            })
            .catch(e => {
                console.log(e);
            })
    }
    render() {
        return (
            <Container>
                <ListGroup>
                    {this.state.users.map(u => {
                        return <ListGroupItem key={u.id}>{u.username}</ListGroupItem>
                    })}
                </ListGroup>
            </Container>
        )       
    }
}
export default Users;