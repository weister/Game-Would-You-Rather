import React from 'react'

const ViewPollForm = ({ question }) => {
	const { optionOne } = question
	return (
		<div className='view-poll-form'>
			<span className='option-text'>...{optionOne.text}...</span>
			<div className='view-poll-btn'>
				<button>
					View Poll
				</button>
			</div>
		</div>
	)}

export default ViewPollForm