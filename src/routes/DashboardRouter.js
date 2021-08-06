import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeaderNav } from '../components/UI/HeaderNav'

export const DashboardRouter = () => {
    return (
        <>
            <HeaderNav />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <h1>Bienvenidos a HEROES APP</h1>
                    </Route>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/hero/:heroId" component={HeroScreen} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}
