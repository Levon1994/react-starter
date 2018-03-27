import React, { PureComponent } from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

import {
    Header,
} from 'components/sections';

import {
    Main,
    Profil,
} from 'containers';

import './App.scss';

@withRouter
export default class App extends PureComponent {
    render() {
        return (
            <article>
                <Header />

                <Switch>
                    <Route
                      exact
                      path="/"
                      component={Main}
                    />
                    <Route
                        path="/profil"
                        component={Profil}
                    />
                    <Route component={Main} />
                </Switch>

            </article>
        );
    }
}
