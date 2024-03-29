import React from "react";
import Index from "pages/index";
import Main from "pages/main";
import About from "pages/about";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/main' component={Main}/>
			<Route exact path='/about' component={About}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
