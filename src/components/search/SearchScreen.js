import React, { useMemo } from 'react'
import queryString from 'query-string'
import { UseForm } from '../../hooks/UseForm'
import { HeroCard } from '../heroes/HeroCard'
import { useLocation } from 'react-router'
import { getHeroesByName } from '../../selectors/getHeroesByName'

export const SearchScreen = ({ history }) => {

    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    const [formValues, handleInputChange] = UseForm({ searchText: q })

    const { searchText } = formValues

    const herosFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault()
        // console.log(searchText)
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h2>Busqueda</h2>
            <br />
            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                placeholder="Busca tu heroe"
                                className="form-control"
                                name="searchText"
                                autoComplete="off"
                                value={searchText}
                                onChange={handleInputChange}
                            />
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Buscar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    {
                        (q === '') && <div className="alert alert-info">Selecione un heroe</div>
                    }
                    {
                        (q !== '' && herosFiltered.length === 0) && <div className="alert alert-warning">No existe ningun heroe con <b>{q}</b></div>
                    }
                    {
                        herosFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
