import React, {Component} from 'react';
import Hours from './Hours';

export default class Day extends Component {
	

	render(props){

	var lis=[];
	var list=[];
	var fillers=this.props.fillers;
	if (this.props.fillers===0){
		fillers=7;
	}
	for (var x=0;x<fillers-1;x++){
		list.push(<button style={{fontSize:'200%',display:'inline-block',width:'14%',paddingTop:'2%',paddingBottom:'2%'}} day={i+1} onClick={this.props.dayClick }>-</button>);
	}
	

	for (var i=0;i<this.props.accdisplaymonth;i++){
		lis.push(<button style={{fontSize:'200%',display:'inline-block',width:'14%',paddingTop:'2%',paddingBottom:'2%'}} day={i+1} onClick={this.props.dayClick }> {i+1} </button>);
	}
	

		return(
			<div style={{position:'absolute',float:'centre',left:'15%'}}>
				<h1 style={{fontSize:'180%',display:'inline-block',width:'14%',paddingTop:'2%',paddingBottom:'2%'}}>Mon</h1>			
				<h1 style={{fontSize:'180%',display:'inline-block',width:'14%',paddingTop:'2%',paddingBottom:'2%'}}>Tue</h1>
				<h1 style={{fontSize:'180%',display:'inline-block',width:'14%',paddingTop:'2%',paddingBottom:'2%'}}>Wed</h1>
				<h1 style={{fontSize:'180%',display:'inline-block',width:'14%',paddingTop:'2%',paddingBottom:'2%'}}>Thu</h1>
				<h1 style={{fontSize:'180%',display:'inline-block',width:'14%',paddingTop:'2%',paddingBottom:'2%'}}>Fri</h1>
				<h1 style={{fontSize:'180%',display:'inline-block',width:'14%',paddingTop:'2%',paddingBottom:'2%'}}>Sat</h1>
				<h1 style={{fontSize:'180%',display:'inline-block',width:'14%',paddingTop:'2%',paddingBottom:'2%'}}>Sun</h1>
				{list}
				{lis}
				<div style={{backgroundColor:'yellow'}}>
					<Hours day={this.props.currentdate} currentmonth={this.props.currentmonth} displaymonth={this.props.displaymonth}/>
				</div>	
				
			</div>
		);
	};
}

/*
accdisplaymonth is number of days in current month
*/