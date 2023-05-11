import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export class Navigation extends Component {

    render() {
        return (
            // <Navbar bg="dark" expand="lg">
            //     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            //     <Navbar.Collapse id="basic-navbar-nav">
            //         <Nav>
            //             <NavLink className="d-inline p-2 bg-dark text-white" to="/home" >
            //                 Home
            //             </NavLink>
            //             <NavLink className="d-inline p-2 bg-dark text-white" to="/category" >
            //                 Category
            //             </NavLink>
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>
            // <nav className="navbar navbar-expand-sm bg-light navbar-dark">
            //     <ul className="navbar-nav">
            //         <li className="nav-item- m-1">
            //             <NavLink className="btn btn-light btn-outline-primary" to="/home">
            //                 Home
            //             </NavLink>
            //         </li>
            //         <li className="nav-item- m-1">
            //             <NavLink className="btn btn-light btn-outline-primary" to="/category">
            //                 Category
            //             </NavLink>
            //         </li>                    
            //     </ul>
            // </nav>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>                            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="/Category">
                                        Category
                                    </NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Customer">
                                        Customer
                                    </NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/feedback">
                                        feedback
                                    </NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/OrderDetails">
                                        OrderDetails
                                    </NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Orders">
                                        Orders
                                    </NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Payment">
                                        Payment
                                    </NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Product">
                                        Product
                                    </NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Shipper">
                                        Shipper
                                    </NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Vendor">
                                        Vendor
                                    </NavLink></li>                                    
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}