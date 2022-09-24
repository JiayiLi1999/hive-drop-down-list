import React from 'react'
import Dropdown from './Dropdown';

class App extends React.Component{
  render(){
    const singleChoices = ['male', 'female', 'nonbinary']
    return (
      <div id="App">
          <Dropdown options={singleChoices}/>
      </div>
    );
  }
}

export default App;
