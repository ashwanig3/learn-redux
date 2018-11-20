import React, { Component } from 'react';
import { connect } from 'react-redux'

class Comment extends Component {
	constructor(props) {
        super(props);
    }

    render() {
    	console.log(this.props)
        return (
           <div>
           	<h1></h1>
           </div> 
        );
    }
}

const mapStateToProps = (state) => {
	return {
		comments: state
	}
}

export default connect(mapStateToProps)(Comment);
