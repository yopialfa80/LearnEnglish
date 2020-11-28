import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import HomeApp from './page/Home';
import Login from './page/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
export default class Index extends Component {
    render() {
        return (
            <div>
                <Login />
            </div>
        )
    }
}

if (document.getElementById('Index')) {
    ReactDOM.render(<Index />, document.getElementById('Index'));
}