import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViewPollForm from './ViewPollForm'
import SubmitAnswerForm from './SubmitAnswerForm'

export const VIEW_POLL = 'VIEW_POLL'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'

class Question extends Component {
	render() {
		const { author } = this.props.question
		const user = this.props.users[author]
		const { answers } = this.props.authedUser
		console.log("* * *", answers)
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
					{this.props.mode === VIEW_POLL
						? <ViewPollForm question={this.props.question}/>
						: <SubmitAnswerForm question={this.props.question}/>
					}
				</div>
			</div>
		)
	}
}

function mapStateToProps({ users, authedUser }) {
	return {
		users
	}
}

export default connect(mapStateToProps)(Question)