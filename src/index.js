import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonsDisplay";
import Spinner from "./Spinner";

class App extends React.Component{

      state = { lat: null ,errorMessage:''};
      componentDidMount(){

        window.navigator.geolocation.getCurrentPosition(
          (position) => this.setState({ lat: position.coords.latitude }),
          (err) => this.setState({ errorMessage: err.message})
          
        );

      }

      rendercontent() {
        if(this.state.errorMessage && !this.state.lat){
          return <div>Error:{this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
         return <SeasonsDisplay lat={this.state.lat}/>
        }

        return <Spinner message="Please accept location request"/>;
      }
    //Rect says we have to define render!!
    render(){
      return(
        <div>{this.rendercontent()}</div>
      );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));