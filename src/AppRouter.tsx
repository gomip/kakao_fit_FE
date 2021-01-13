import * as React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {MainPage} from "./Main/MainPage";

/**
 *  2021.01.13 | gomip | created
 */

export const AppRouter: React.FC = () => {
    // State -----------------------------------------------------------------------------------------------------------
    // Function --------------------------------------------------------------------------------------------------------
    // Dom -------------------------------------------------------------------------------------------------------------
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
            </Switch>
        </Router>
    )
}