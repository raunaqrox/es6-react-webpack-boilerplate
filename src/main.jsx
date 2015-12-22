import Hello from './hello.jsx';
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render(){
      return (
	    	<Hello />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));

