import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }
    componentDidCatch(){
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Uh oh something went wrong</h1>
        } else {
            return this.props.childrenn;
        }
    }
}

export default ErrorBoundary;