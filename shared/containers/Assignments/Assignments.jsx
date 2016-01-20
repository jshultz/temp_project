import React, { Component , PropTypes }   from 'react';

class Assignments extends Component {
    static propTypes = {
    };

    render() {
        const currentPath = this.props.location.pathname
        return (
            <NoAssignment pathname={currentPath}/>
        );
    }
}

export default connect(state => ({ pathname: state.pathname }))(Assignments)
