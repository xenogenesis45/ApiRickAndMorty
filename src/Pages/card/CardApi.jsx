import React, { useEffect, useState } from 'react'
import "./Card.css"

export const CardApi = ({ datos }) => {

    const [isToggling, setIsToggling] = useState(false);

    const ValdarVida = () => {
        if (datos.status == "Alive") {
            return (
                <div>
                    {/* <button class="btn btn-success">Vivo</button> */}

                    <span style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                        <i style={{ color: "green", }}
                            className={`btn fa-solid fa-play ${isToggling ? 'blink' : ''}`}>
                        </i>
                        <h6 style={{}}>Con vida</h6>
                    </span>
                    {/* <i class="fa-solid fa-play"></i> */}
                    {/* <button
                    >
                        Vivo
                    </button> */}
                </div>

            )
        } else if (datos.status == "unknown") {
            return (
                <div>
                    <button class="btn btn-warning">Indefinido</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button class="btn btn-danger">Muerto</button>
                </div>
            )
        }
    }

    useEffect(() => {

        const interval = setInterval(() => {
            setIsToggling((prev) => !prev); //determinar cada cuanto titilea
        }, 500);
        return () => clearInterval(interval);
    }, [])



    return (
        <div>
            {/* <div class="card mb-3" style="max-width: 540px;"> */}
            <div class="card border-secondary mb-4" style={{ maxWidth: "540px", height: "100%" }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img
                            src={datos.image}
                            class="img-fluid rounded-start"
                            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }}
                            alt="..."
                        />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{datos.name}</h5>
                            {/* <p class="card-text">{datos.status}</p> */}
                            {ValdarVida()}
                            <p style={{ fontSize: "15px" }} class="card-text">
                                {/* <p>
            Especie: {datos.species} <br />
            Genero: {datos.gender}
          </p>
          <p>
          </p> */}
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Especie: {datos.species}</li>
                                    <li class="list-group-item">Genero: {datos.gender}</li>
                                    <li class="list-group-item">Origen: {datos.origin.name}</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
