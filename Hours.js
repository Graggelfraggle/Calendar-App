import React, {Component}from 'react';



export default class Hours extends Component {

	constructor(props){
		super(props);
		this.state = {};

		};

	

	

	render(){

	

	var hours=[];
	
	for (var j=0;j<24;j++){
		hours.push(<button style={{display:'block',paddingTop:'2%',paddingBottom:'2%',width:'7%'}}hour={j} >{j}:00</button>);
	}

		return (
		<div>
			<h1>Scheduled Events</h1>			
			<div>
				{hours}
			</div>			
		</div>
		);
	};
}


/*functions needed


onClick={this.props.hourClick()}
*/