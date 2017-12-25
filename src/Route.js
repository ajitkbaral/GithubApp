import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

export default class Route extends Component<{}> {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar>
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="signup" component={Signup} title="Signup" />
                    <Scene key="home" component={Home} title="Home" />
                </Stack>
            </Router>
        );
    }
}