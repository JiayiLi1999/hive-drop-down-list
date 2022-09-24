import React from "react"
import Dropdown from "./Dropdown";

class App extends React.Component{
  render(){
    
    const choices = ["male", "female", "nonbinary"]
    const choices2 = ["CA", "WA", "NY", "HA", "UI", "TX"]
    return (
      <div id="App">
        <Dropdown options={choices}/>
        <Dropdown options={choices2} multiselect={true}/>
      </div>
    );
  }
}

export default App;
