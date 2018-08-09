import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Overlay extends Component {
    render() {
        return (
            ReactDOM.createPortal(
                this.props.children,
                document.getElementById('overlay')
            )
        );
    }
}

export default Overlay;