import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div className="col">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`./assets/heroes/${id}.jpg`} className="img-fluid rounded-start" alt={superhero} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) && <p className="card-text" style={{fontSize:'0.75rem'}}>{characters}</p>
                            }
                            <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
                            <Link
                                to={`./hero/${id}`}
                                className="btn btn-success btn-sm"
                            >Saber más</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}