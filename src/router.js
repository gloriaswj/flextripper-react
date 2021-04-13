import React, {Component} from 'react';
import {HashRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Body from "./components/Intro/Body";
import Login from "./components/Intro/Login";
import Register from "./components/Intro/Register";
import Edit from "./components/Search/Edit";
import Home from "./components/Home/HomeSearch";

export default class RouterWrap extends Component {
    constructor() {
        super();
        this.state = {
            path: null
        };
    }

    showForm = () => {
        this.setState({
            path: "/"
        });
    }

    render() {
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={Body} exact onShow={this.showForm}/>
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/home" component={Home} />
                        <Route path="/edit" component={Edit} />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}
