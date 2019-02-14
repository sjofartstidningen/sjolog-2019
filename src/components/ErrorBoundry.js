import React, { Component } from 'react';

class ErrorBoundry extends Component {
  state = {
    hasError: false,
    error: null,
  };

  componentDidCatch(error) {
    this.setState(() => ({
      hasError: true,
      error,
    }));
  }

  render() {
    const { children } = this.props;
    const { hasError, error } = this.state;

    if (hasError) {
      return <p>{error.message}</p>;
    }

    return children;
  }
}

export { ErrorBoundry };
