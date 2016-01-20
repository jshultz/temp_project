import React, { Component , PropTypes }   from 'react';
import cx from 'classnames'

class LaunchPad extends Component {
    static propTypes = {
    };

    constructor () {
        super()
        this.state = {showing: false}
    }

    triggerLaunchpad (data) {
        return this.state.showing === true ? this.setState({showing: false}) : this.setState({showing: true})
    }

    render() {
        return (
            <div>
                <div onClick={ this.triggerLaunchpad.bind(this) } id='launchpad_name' className='session_bar_header' data-active-class='act'>

                    <svg width='16px' height='17px' viewBox='0 0 16 17'>
                        <path d='M6,6h4v1H6V6z M0,7h4V6H0V7z M0,13h4v-1H0V13z M6,1h4V0H6V1z M6,13h4v-1H6V13z M12,13h4v-1h-4V13z M12,0v1h4 V0H12z M0,1h4V0H0V1z M12,7h4V6h-4V7z' className='shadow' />
                        <path d='M0,7h4v3v1H0v-1V7z M0,16v1h4v-1v-3H0V16z M12,10v1h4v-1V7h-4V10z M0,4v1h4V4V1H0V4z M12,1v3 v1h4V4V1H12z M12,16v1h4v-1v-3h-4V16z M6,16v1h4v-1v-3H6V16z M6,10v1h4v-1V7H6V10z M6,4v1h4V4V1H6V4z' className='white-part' />
                    </svg>

                </div>
                <ul className={ classes } style={showMenu} key={visible} >
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowQTgwMTE3NDA3MjA2ODExOEMxNEExQjM0QzM0NTA1RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNDc2MDNFQTc3QkQxMUUyOEI0ODhEQjAyMUJDNDZGNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNDc2MDNFOTc3QkQxMUUyOEI0ODhEQjAyMUJDNDZGNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY5N0YxMTc0MDcyMDY4MTE4QzE0ODk4MDlCQ0Y5NEIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBBODAxMTc0MDcyMDY4MTE4QzE0QTFCMzRDMzQ1MDVGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6kRzZAAAAEFJREFUeNpi/P//PwMI2KcxMUABSIDx4Kx/MD4DXAamACr5H0kTAyOSSf+RdUMVMcIVoSvAUGiXClKHG4DkAQIMAHBoOnPGKe4EAAAAAElFTkSuQmCC' alt className={'session_bar_menu_pointer' + ' ' + 'launchpad_pointer'}/>
                    <li>
                        <a href='https://' target='_blank'>
                            <div className='icons_mindful_logo'/>
                            Mindful
                        </a>
                    </li>
                    <li>
                        <a href='/socrative/sso' target='_blank'>
                            <div className='icons_socrative_logo'/>
                            Socrative
                        </a></li>
                    <li>
                        <a href='/switch'>
                            <div className='icons_mc_launcher_logo'/>
                            MasteryConnect
                        </a></li>
                </ul>
            </div>
        );
    }
}

export default connect(state => ({ showing: false }))(LaunchPad)
