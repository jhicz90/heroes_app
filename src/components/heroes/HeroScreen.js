import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { heroImages } from '../../helpers/HeroImages'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams()
    const hero = useMemo(() => getHeroById(heroId), [heroId])

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero

    if (!hero) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack()
        }
    }

    return (
        <div className="row mt-4">
            <div className="col-3">
                <img src={heroImages(`./${heroId}.jpg`).default} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>
            <div className="col-9 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"> <b>First appearance: </b>{first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button
                    onClick={handleReturn}
                    className="btn btn-outline-secondary btn-lg">
                    Regresar
                </button>
            </div>
        </div>
    )
}
