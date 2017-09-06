import React, { Component } from 'react';

export default class Year extends Component {
	render(){
		return(
			<div>
				<button style={{display:'inline-block'}}  onClick={this.props.leftYearClick}>
		        {'<'}
		        </button>
		        {<h1 style={{display:'inline-block'}} >{this.props.year+1900}</h1>}
		        <button style={{display:'inline-block'}} onClick={this.props.rightYearClick}>
		          {'>'}
		        </button>
	        </div>
		);
	};
}