import React, {Component} from "react";
import "./App.css";
import Data from "./Data/Data";
require("./App.css");

class App extends Component{
  

  render(){
    const spinner = document.getElementById('spinner');

    if (spinner && !spinner.hasAttribute('hidden')) {
      spinner.setAttribute('hidden', 'true');
    }

      return(
        <div className="App">
          {console.log("done")}
      <Data />
        </div>
      )
  
  }
}


export default App;
