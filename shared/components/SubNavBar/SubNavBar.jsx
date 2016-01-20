import React, { Component , PropTypes }   from 'react';
import {Link} from 'react-router'

class SubNavBar extends Component {
    static propTypes = {
    };

    constructor () {
        super()
    }

    render() {
        return (
            <div id='subnav' className='subnav'>
                <div id='subnav_inner' className='subnav_inner'>
                    <ul className='subnav_links'>
                        <li className={archived ? '' : 'selected'}>
                            <Link to='/classrooms' >Current</Link>
                        </li>
                        <li className={archived ? 'selected' : ''}>
                            <Link to='/classrooms/archived'>Archived</Link>
                        </li>
                    </ul>
                    <div id='add_widget' className='add_widget'>
                        <div id='add_widget_menu' className='add_widget_menu'>
                            <div id='add_widget_trigger' className='add_widget_trigger'>
                                <OrangeButton pathname={currentPath}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (SubNavBar)
