import React from 'react';
import World from './world.jsx'
import AppBar from 'material-ui/lib/app-bar'
 
class Hello extends React.Component {
  render() {
      return <AppBar title="hello"
      	iconElementRight={<World />}
       />
    }
}

export default Hello