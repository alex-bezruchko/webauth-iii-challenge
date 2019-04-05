import React from 'react';
import Form from 'react-bootstrap/Form';
import { withRouter } from 'react-router-dom';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.username)

    }
    handleSubmit = e => {
        e.preventDefault();
        const endpoint = 'http://localhost:5000/api/auth/login';
        axios
            .post(endpoint, this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token)
                this.props.history.push('/users')
            })
            .catch(e => {
                console.log(e)
            })

    }
    render() {
        return(
            <Form noValidate onSubmit={this.handleSubmit}>
                <h1 style={{textAlign: 'center' }}> Login </h1>
                <FormGroup controlId="formBasicUsername">
                    <FormLabel>Email address</FormLabel>
                    <FormControl 
                        name="username"
                        onChange={this.handleInputChange} 
                        type="email" 
                        placeholder="Enter username" 
                    />
                    
                </FormGroup>

                <FormGroup controlId="formBasicPassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl 
                        name="password"
                        onChange={this.handleInputChange} 
                        type="password" 
                        placeholder="Password" 
                    />
                </FormGroup>

                <Button variant="info" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default withRouter(Login);