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
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch (error, errorInfo) {
    console.error(error, errorInfo)
  }

  refresh () {
    window.location.assign(window.location.origin)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <div>Error</div>
          <button onClick={this.refresh}>
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary
