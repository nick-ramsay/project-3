import React from "react";
import "./style.css";

function LoginForm(props) {

    return (
        <div className="container">
            <div className="row h-70 justify-content-center align-items-center">
                <div className="col-md-6 mt-4">
                    <form class="my-5 mb-4 py-5 px-5 bg-white rounded content-container">
                        <div className="form-group">
                            <h1 class="mb-3"><strong>Account Login</strong></h1>
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="loginEmail" onChange={props.handleFormUpdate} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  name="loginPassword" onChange={props.handleFormUpdate} />
                        </div>
                        <button type="button" className="btn btn-sm mb-5" name="loginBtn" onClick={props.handleLoginAttempt}>Log In</button>
                        <p>New to Crafter? <a href="/create-account"><strong>Create an account here!</strong></a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;