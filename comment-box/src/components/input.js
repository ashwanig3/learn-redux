import React, { Component } from 'react';
import {addCommentBox} from './../actions/action';
import { connect } from 'react-redux'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	title: ''
        }
    }

    handleChange = (e) => {
    	this.setState({
    		title: e.target.value
    	})
    }

    handleSubmit = (e,dispatch) => {
    	e.preventDefault();
    	this.props.dispatch(addCommentBox(this.state.title))
    }
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
           	<input type="text" placeholder="title" onChange={this.handleChange} />
           </form> 
        );
    }
}

export default connect()(Input);


