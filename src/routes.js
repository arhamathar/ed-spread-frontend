import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './Pages/auth/login'

const Routes = () => {
    return (
        <Switch>
            <Route path='/login'>
                <Login />
            </Route>
        </Switch>
    )
}

export default Routes
