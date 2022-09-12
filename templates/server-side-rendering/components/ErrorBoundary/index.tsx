/**
 * Error Boundaries
 *
 * Error boundaries catch errors during rendering, in lifecycle methods,
 * and in constructors of the whole tree below them.
 *
 * Errors happen outside of the React rendering lifecycle will not be
 * caught by error boundary:
 *
 * Event handlers
 * Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
 * Server side rendering
 * Errors thrown in the error boundary itself (rather than its children)
 *
 * @reference https://github.com/bvaughn/react-error-boundary
 */

import { Component } from 'react';

interface Props {
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component {
  state: State

  constructor (props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError (error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch (error, errorInfo) {
    // @TODO
    // Log the error to an error reporting service
    console.error(error, errorInfo);
  }

  refresh () {
    window.location.assign(window.location.origin)
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div>
        <div>Error</div>
        <button onClick={this.refresh}>
          Refresh
        </button>
      </div>
    );
  }
}

export default ErrorBoundary
