import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import DevTools from '../DevTools';

import "./App.scss";

class App extends React.Component {
    static propTypes = {
        pathname: PropTypes.string,
        location: PropTypes.object,
        children: PropTypes.object
    };

    render() {

        const DevTools = createDevTools(
            <DockMonitor toggleVisibilityKey='ctrl-h'
                         changePositionKey='ctrl-q'>
                <LogMonitor theme='tomorrow' />
            </DockMonitor>
        );

        const currentPath = this.props.location.pathname
        return (
            <div id="main-view">
                <h1>Todos</h1>

                <hr />

                {this.props.children}

            </div>
        );
    }
}
export default (App)