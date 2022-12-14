import React, { Component } from 'react';


class ErrorBoundary extends Component{
    constructor(probs) {
        super(probs);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops. That's not good</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;