
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { CardApi } from './card/CardApi'


export const Home = () => {

    const [apiRick, setapiRick] = useState([])

    const ObtenerContenido = async () => {
        try {
            const res = await axios.get(`https://rickandmortyapi.com/api/character`)
            setapiRick(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        ObtenerContenido();
        console.log("aqui pasa la api de rick y morty", apiRick.results);
    }, [])


    return (
        <div className='container'>
            <h4 style={{ textAlign: "center", marginBottom:"4rem" }}>Información</h4>
            <div className='container'>
                <div className="row">
                    {apiRick.results && apiRick.results.map((datos) => (
                        <div className="col-md-4">
                            <CardApi key={datos.id} datos={datos} />
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}
