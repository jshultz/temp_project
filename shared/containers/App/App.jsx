import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import DevTools from '../DevTools';

class App extends React.Component {
    static propTypes = {
        pathname: PropTypes.string,
        location: PropTypes.object,
        children: PropTypes.object
    };

    render() {
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