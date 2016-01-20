import React, { Component , PropTypes }   from 'react';

class Classrooms extends Component {
    static propTypes = {
    };

    render() {
        const currentPath = this.props.location.pathname
        return (
            <NoClassroom pathname={currentPath}/>
        );
    }
}

export default connect(state => ({ pathname: state.pathname }))(Classrooms)
