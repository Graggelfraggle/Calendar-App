import React, { Component } from 'react';
import Day from './Day.js'

export default class Month extends Component {
	constructor(props){
	super(props);
	var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	
	this.state={
		displaymonth:months[this.displaymonth],
	}

	
	};
	
	render(props){
	var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	var monthdays = ['31','28','31','30','31','30','31','31','30','31','30','31']
	
	var myDate = new Date();
	myDate.setFullYear(this.props.displayyear+1900);
	myDate.setMonth(this.props.displaymonth+this.props.currentmonth);
	myDate.setDate(1);

	this.state = {  
    filler:myDate.getDay(),
  	};

	
	if (0 === this.props.currentyear % 4 ){
		monthdays[2] = '29';
	}
		return(
		<div>
			<div style={{position:'absolute',left:'40%',zIndex:'30'}}>
				<button onClick={this.props.leftClick}>
		        {'<'}
		        </button>
		        {months[this.props.displaymonth+this.props.currentmonth]}
		        <button onClick={this.props.rightClick}>
		          {'>'}
		        </button>
	        </div>
	        <div style={{backgroundColor:'black',width:'100%'}}>
	        	<Day displaymonth={this.props.displaymonth} currentmonth={this.props.currentmonth} currentdate={this.props.currentdate} year={this.props.currentyear} month={this.props.displaymonth}  dayClick={()=>this.props.dayClick()} accdisplaymonth={monthdays[this.props.displaymonth+this.props.currentmonth]} fillers={this.state.filler}  />
			</div>
		</div>
		);
	};
}

/*on click change month but start with curent month*/