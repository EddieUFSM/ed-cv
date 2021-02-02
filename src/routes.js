import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from './pages/Home'
import Eng from './pages/Eng'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/** Geral */}
                <Route exact path="/" render={(props) => <Home {...props} />} />
                <Route exact path="/eng" render={(props) => <Eng {...props} />} />
            </Switch>
        </BrowserRouter>
    )
}

