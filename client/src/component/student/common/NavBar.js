import React from 'react';
import Link from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <Link class="navbar-brand" to={"/"}>SMS Application</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to={"/view-students"}>View All Students</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/add-student"}>Add New Student</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar