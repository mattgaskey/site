import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Main from './Components/Main';
import { createBrowserHistory } from 'history';
import './App.css';

class App extends Component {

  render() {
  	const history = createBrowserHistory();

		history.listen(location => {
		  // Use setTimeout to make sure this runs after React Router's own listener
		  setTimeout(() => {
		    // Keep default behavior of restoring scroll position when user:
		    // - clicked back button
		    // - clicked on a link that programmatically calls `history.goBack()`
		    // - manually changed the URL in the address bar (here we might want
		    // to scroll to top, but we can't differentiate it from the others)
		    if (location.action === 'POP') {
		      return;
		    }
		    // In all other cases, scroll to top
		    window.scrollTo(0, 0);
		  });
		});
    return (
    	<Router history={history}>
       	<Main />
      </Router>
    );
  }
}

export default App;
