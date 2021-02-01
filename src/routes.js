import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from './pages/Home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/** Geral */}
                <Route exact path="/" render={(props) => <Home {...props} />} />
            </Switch>
        </BrowserRouter>
    )
}

