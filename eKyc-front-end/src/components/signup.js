import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { withRouter } from "react-router-dom";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleLoginLink = (event) => {
        console.log("Login clicked");
        this.props.history.push("/login");
    }

    handleRegister = async () => {
        console.log("Register clicked");
        const response = await fetch(`http://localhost:8080/api/user/register`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
        });
        const token = await response.text();
        if (response.ok) {
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('token', token);
            this.props.history.push("/verifyId");
        } else {
            alert(`Error : ${token}`);
        }
    }

    handleRegisterAsInstitute = async () => {
        console.log("Register clicked");
        const response = await fetch(`http://localhost:8080/api/user/register`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
        });

        const token = await response.text();
        if (response.ok) {
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('token', token);
            this.props.history.push("/viewData");
        } else {
            alert(`Error : ${token}`);
        }
    }


    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (<div>
            <Jumbotron>
                <h1>Central Bank Network</h1>
                <p>
                    This is a simple hyperledger application for FinSec Framewrok demonstration using official documentation and open-source projects. 
                </p>
            </Jumbotron>
            <Form>

                <Form.Group as={Col} md="4" controlId="formBasicEmail">
                    <Form.Label>Admin Email address</Form.Label>
                    <Form.Control type="email" placeholder="Please input organnizational email" onChange={this.handleEmailChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                </Form.Group>
        
                <Form.Group as={Col} md="4" controlId="formBasicRegister">
                    <Button variant="info" onClick={this.handleRegister}>
                        Register 
                        </Button>{" "}
                        <Button variant="info" onClick={this.handleRegisterAsInstitute}>
                        Implement in your Bank 
                        </Button>
                        <Form.Text className="text-muted">
                        Choose "Resgister" to join Central Bank Hyperledger Network <br/>
                        Choose "Implement in your bank" to implement hyperledger for interbank tasks
                        </Form.Text>
                </Form.Group>
                <Button variant="link" onClick={this.handleLoginLink}>
                    Already have an account?
                    </Button>
            </Form>
        </div>
        );
    }
}

export default withRouter(SignUp);