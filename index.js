import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './loader';

 class App extends React.Component{
    state={lat:null,error:''};
 
         
        componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
             this.setState({lat:position.coords.latitude})
                    
           },
             (err)=>{
             this.setState({error:err.message})
              }
            );   
        }
    

     
     render(){
       
          if(this.state.error && !this.state.lat){
             return <div>Error: {this.state.error}  </div>;
         }
          if(!this.state.error && this.state.lat){
            return <SeasonDisplay lat= {this.state.lat} />;
        }
         if(!this.state.error && !this.state.lat){
            return <Loader/>;
        }
     }
}
    

ReactDOM.render(
    <App/>,document.querySelector('#root')
) 