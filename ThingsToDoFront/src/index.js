import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/shared/Header/Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from "./components/Task/Task";
import AjoutTask from "./components/AjoutTask/AjoutTask";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header></Header>
                
                <Switch>
                        <Route path="/" component={Task} exact />
                        <Route path="/ajout" component={AjoutTask} exact />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
