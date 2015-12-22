import Hello from './hello.jsx';
import World from './world.jsx';
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render(){
      return (
      	<div>
	        <Hello />
	        <World />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));

