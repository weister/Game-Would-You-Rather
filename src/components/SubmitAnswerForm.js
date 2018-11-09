import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSubmitQuestionAnswer } from '../actions/questions'

class SubmitAnswerForm extends Component {
	state = {
		option: "optionOne",
		toResult: false
	}

	handleOnChange = (e) => {
		const text = e.target.value
		this.setState(() => ({ option: text }))
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const { dispatch, question } = this.props
		const answer = this.state.option
		dispatch(handleSubmitQuestionAnswer(answer, question.id))

		this.setState(() => ({
			toResult: true
		}))
	}

	render() {
		const { optionOne, optionTwo } = this.props.question
		return (
			<div className='submit-answer-container'>
				<form className='submit-answer-form' onSubmit={this.handleSubmit}>
				  <input 
				  	type="radio" 
				  	name="gender"
				  	label="sfad" 
				  	value="optionOne"
				  	onChange={this.handleOnChange}
				  	checked={this.state.option === "optionOne"}
				  /> 
				  	{optionOne.text}
				  <input 
				  	type="radio" 
				  	name="gender" 
				  	value="optionTwo"
				  	onChange={this.handleOnChange}
				  	checked={this.state.option === "optionTwo"}
				  />
				  	{optionTwo.text} 
					<button className='form-submit'>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

export default connect()(SubmitAnswerForm)