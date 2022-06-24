import React from 'react'
import { ICountryName } from '../Interfaces/ICountryName'

export const CardCountryItem = ({ data , onDeleteCountry, value}:any) => {

    const country: ICountryName = data;

    return (

        <>

            <div className="column">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={country.flags.png} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src={country.coatOfArms.png} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{country.name.common}</p>
                                <p className="subtitle is-6">@{country.capital}</p>
                            </div>
                        </div>

                        <div className="content">
                            {country.languages.spa}
                        </div>
                    </div>

                    <div className="card-footer">
                        <button 
                            className="button is-danger"
                            onClick={()=> onDeleteCountry(value)}
                            >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>

        </>

    )
}
