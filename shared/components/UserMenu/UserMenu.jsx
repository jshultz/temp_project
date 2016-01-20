import React, { Component , PropTypes }   from 'react';
import {Link} from 'react-router'
import cx from 'classnames'

class UserMenu extends Component {
    static propTypes = {
    };

    constructor () {
        super()
        this.state = { showing: false }
    }

    triggerLaunchpad (data) {
        return this.state.showing === true ? this.setState({showing: false}) : this.setState({showing: true})
    }

    render() {
        const classes = cx('session_bar_menu_options', 'session_menu_list')
        const showMenu = this.state.showing === false ? {visibility: 'hidden'} : {visibility: 'visible'}
        const visible = '#' + this.state.showing

        return (
            <div className='session_bar_menu'>
                <div onClick={this.triggerLaunchpad.bind(this) } id='session_bar_name' className={'session_bar_header' + ' ' + 'session_bar_name'} data-active-class='act'><span>Cindi</span></div>
                <ul className={ classes } style={showMenu} key={visible}>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowQTgwMTE3NDA3MjA2ODExOEMxNEExQjM0QzM0NTA1RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNDc2MDNFQTc3QkQxMUUyOEI0ODhEQjAyMUJDNDZGNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNDc2MDNFOTc3QkQxMUUyOEI0ODhEQjAyMUJDNDZGNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY5N0YxMTc0MDcyMDY4MTE4QzE0ODk4MDlCQ0Y5NEIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBBODAxMTc0MDcyMDY4MTE4QzE0QTFCMzRDMzQ1MDVGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6kRzZAAAAEFJREFUeNpi/P//PwMI2KcxMUABSIDx4Kx/MD4DXAamACr5H0kTAyOSSf+RdUMVMcIVoSvAUGiXClKHG4DkAQIMAHBoOnPGKe4EAAAAAElFTkSuQmCC' alt className={'session_bar_menu_pointer' + ' ' + 'launchpad_pointer'}/>
                    <div className='item_group'>
                        <li><a href='/help'>Help</a></li>
                        <li><a href='/teachers/3521/edit'>Settings</a></li>
                    </div>
                    <div className={'item_group' + ' ' + 'divided'}>
                        <li><a href='//mc.local/logout'>Log Out</a></li>
                    </div>
                </ul>
            </div>
        );
    }
}

export default connect(state => ({ showing: false }))(UserMenu)
