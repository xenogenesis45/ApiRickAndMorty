import React from 'react'
import imagen from "../img/206823.jpg"

export const Navbar = () => {
    return (
        <div style={{ marginRight: "5rem", marginLeft: "5rem" }}>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <span class="navbar-brand" style={{ display: "flex", alignItems: "center" }}>
                        <img src={imagen} alt="" style={{ width: "80px", borderRadius: "50%", }} />
                        <h3 style={{ marginLeft: "20px" }}>Api Rick and morty  </h3>
                    </span>
                    <form class="d-flex" role="search" style={{ alignItems: "center" }}>
                        <input class="form-control me-2" type="search" placeholder="Busqueda" aria-label="Search" />
                        {/* <button class="btn btn-outline-success" type="submit">Buscar</button> */}
                        <i class="fa-solid fa-magnifying-glass" style={{ fontSize: "20px" }}></i>
                    </form>
                </div>
            </nav>
        </div>
    )
}
