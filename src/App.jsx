import React, { Component } from 'react';
import News from './page/News';
import Weather from './page/Weather';
import './App.scss';

class Page extends Component {
  componentDidMount() {
    /* eslint-disable */
    const context = cast.framework.CastReceiverContext.getInstance();
    context.setLoggerLevel(cast.framework.LoggerLevel.DEBUG);
    const playerManager = context.getPlayerManager();

    // Listen and log all Core Events
    playerManager.addEventListener(cast.framework.events.category.CORE, event => {
      console.log(event);
    });
  }

  render() {
    return (
      <div className="app">
        <div className="app--flex">
          <div className="app--box">
            <News />
          </div>
          <div className="app--box">
            <Weather />
          </div>
          <div className="app--box" />
          <div className="app--box" />
        </div>
      </div>
    );
  }
}

export default Page;
