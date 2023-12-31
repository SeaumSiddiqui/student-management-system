import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>SMS Application</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/view-students"}>View Students</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/add-student"}>Add Student</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar