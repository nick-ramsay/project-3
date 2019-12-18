import React, { Component } from "react";
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";
import "./style.css";

class CreateAccount extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <LoginNavbar />
                <div className="container">
                    <div className="row h-70 justify-content-center align-items-center">
                        <div className="col-md-6 mt-4">
                            <form class="my-5 mb-4 py-5 px-5 bg-white rounded">
                                <h1 class="mb-3"><strong>Create New Account</strong></h1>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4">Phone</label>
                                        <input type="phone" class="form-control" id="inputPassword4" placeholder="Phone" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4">Password</label>
                                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4">Confirm Password</label>
                                        <input type="password" class="form-control" id="inputPassword4" placeholder="Confirm Password" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress2">Address 2</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputCity">City</label>
                                        <input type="text" class="form-control" id="inputCity" />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputState">State</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>New South Wales</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label for="inputZip">Postcode</label>
                                        <input type="text" class="form-control" id="inputZip" />
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Create Account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CreateAccount;