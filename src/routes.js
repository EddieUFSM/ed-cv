import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from './pages/Home'
import Eng from './pages/Eng'
import Frc from './pages/Frc'
import Deu from './pages/Deu'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/** Geral */}
                <Route exact path="/" render={(props) => <Home {...props} />} />
                <Route exact path="/eng" render={(props) => <Eng {...props} />} />
                <Route exact path="/Deu" render={(props) => <Deu {...props} />} />
                <Route exact path="/Frc" render={(props) => <Frc {...props} />} />
            </Switch>
        </BrowserRouter>
    )
}

