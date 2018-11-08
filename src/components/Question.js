import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
	render() {
		const { id, users, questions } = this.props
		const question = questions[id]
		const { name, author, optionOne } = question
		const user = users[question.author]
		return (
			<div className='question-container'>
				<span className='question-header'>{user.name} asks: </span>
				<div className='question-body'>
					<img 
						alt={user.name+' avatar'} 
						width='50' 
						height='70'
					/>
					<h5>Would you rather</h5>
					<span className='option-text'>{optionOne.text}</span>
					<div className='view-poll-btn'>
						<button>
							View Poll
						</button>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ users, questions, authedUser }) {
	return {
		users,
		questions,
		authedUser
	}
}

export default connect(mapStateToProps)(Question)