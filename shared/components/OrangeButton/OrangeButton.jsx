import React, { Component , PropTypes }   from 'react';
import {Link} from 'react-router'

class OrangeButton extends Component {
    static propTypes = {
    };

    constructor () {
        super()
    }

    render() {
        return (
            <Link className='app' to='#' activeClassName='active'>
                + {this.props.pathname.indexOf('assignments') > -1 ? 'Add Assignment' : 'Add Class'}
            </Link>
        );
    }
}

export default (OrangeButton)
