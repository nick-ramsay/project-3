import React, { Component } from "react";
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";
import "./style.css";

class Login extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <LoginNavbar />
                <div className="container">
                    <div className="row h-70 justify-content-center align-items-center">
                        <div className="col-md-6 mt-4">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login;