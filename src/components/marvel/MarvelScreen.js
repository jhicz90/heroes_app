import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h2>Somos MARVEL</h2>
            <hr />
            <HeroList publisher="Marvel Comics" />
        </div>
    )
}
