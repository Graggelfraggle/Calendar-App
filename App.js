import React, { Component } from 'react';
import './App.css';
import Month from './Month.js';
import Year from './Year.js';

class App extends Component {
  constructor(props){
    super(props);
    var now = new Date();
    this.leftClick=this.leftClick.bind(this);
    this.rightClick=this.rightClick.bind(this);
  this.state ={  
    currentmonth:now.getMonth(),
    currentdate:now.getDate(),
    currentyear:now.getYear(),
    displaymonth:0,
    displayyear:now.getYear(),
  };

  }
  
  leftClick() { /*if december on year before is reached reset timeline*/
    const newMonth = this.state.displaymonth - 1;
    const newYear = this.state.displayyear;
    if (0 > newMonth + this.state.currentmonth){
      this.setState({displaymonth:(11-this.state.currentmonth),displayyear:newYear-1});
    }else{
      this.setState({displaymonth:newMonth});
    }
    
     
  }
  rightClick() { /*if january in future is reached reset month counter*/
    const newMonth = this.state.displaymonth + 1;
    const newYear = this.state.displayyear;
    if(11<newMonth + this.state.currentmonth){

      this.setState({displaymonth:-this.state.currentmonth,displayyear:newYear+1});
    }else{
      this.setState({displaymonth:newMonth});
    }  
  }

  leftYearClick() {
    const newYear = this.state.displayyear-1;
    this.setState({displayyear:newYear});

  }

  rightYearClick() {
    const newYear = this.state.displayyear+1;
    this.setState({displayyear:newYear});
  }

  dayClick (){

    
  }

      
  
  render() {
    var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return (
      <div className="App">
        

        <div style={{display:'inline-block',float:'right',paddingTop:'3%',paddingBottom:'3%',paddingLeft:'3%'}} className='Currentdate'>
            {"Current Date:"}
            <br/>
            {this.state.currentdate+" "}
            {months[this.state.currentmonth]+" "}
            {this.state.currentyear +1900}
        </div>
        <div  className="Buttons">
          <Year year={this.state.displayyear} rightYearClick={()=>this.rightYearClick()} leftYearClick={()=>this.leftYearClick()} />
        </div>
        
        <div className="Month">
          
          <Month dayClick={()=>this.dayClick()} displayyear={this.state.displayyear} leftClick={()=>this.leftClick()} rightClick={()=>this.rightClick()} displaymonth={this.state.displaymonth} currentmonth={this.state.currentmonth} currentyear={this.state.currentyear} currentdate={this.state.currentdate}/>
          
        </div>

        
      </div>
    );
  }
}

export default App;

/*Calendar*/
