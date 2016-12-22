import React from 'react';
import classNames from 'classnames';
import './styles.scss';

class JSLou extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      rotating: false,
      reverse: false
    };
  }

  toggleRotating (e) {
    e.preventDefault();
    this.setState({
      rotating: !this.state.rotating
    });
  }

  toggleReverse (e) {
    e.preventDefault();
    this.setState({
      reverse: !this.state.reverse
    });
  }

  render () {
    const { rotating, reverse } = this.state;
    return (
      <div className="jslou">
        <h1 className="header">Come to JSLou!</h1>
        <div className={classNames(
          "imagewrapper",
          { "rotating": rotating, "reverse": reverse }
        )}>
          <img src="http://jslou.org/img/logo-2015.png" />
        </div>
        {!rotating && (
          <a
            className="link"
            href=""
            onClick={e => this.toggleRotating(e)}
          >
            Rotate!
          </a>
        )}
        {rotating && (
          <a
            className="link"
            href=""
            onClick={e => this.toggleReverse(e)}
          >
            Reverse!
          </a>
        )}
        <a className="link" href="http://jslou.org">Learn more here.</a>
      </div>
    );
  }
}

module.exports = JSLou;
