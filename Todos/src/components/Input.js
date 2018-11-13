import React, { Component } from 'react';
import { increament } from '../actions/actionCreator';
import { connect } from 'react-redux';

class Input extends Component {
		constructor(props) {
			super(props);
			this.state = {
				value: ''
			}
		}

		setValue = (e) => {
			this.setState({
				value: e.target.value
			})
		}
   		 
    render() {
        return (
           <div className="input-box">
           		<input type="text" onChange={this.setValue} />
           		<button onClick={ () => this.props.dispatch(increament(this.state.value))}>submit</button>
           		{
           			this.props.array.map(todo => <li>{todo}</li>)
           		}
           </div> 
        );
    }
}

function mapStateToProps(state) {
	return {array : state.todoArray};
} 

export default connect(mapStateToProps)(Input);
