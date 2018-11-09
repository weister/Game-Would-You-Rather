import React from 'react'
import Question, { VIEW_POLL } from './Question'

const QuestionList = ({ authedUser, questions, answered }) => (
	<div>
		QuestionList
		<ul>
			{Object.keys(questions).filter((qid) => {
				return questionFilter(qid, authedUser, answered)
			}).map((qid) => (
				<li key={qid}>
					<Question
						question={questions[qid]}
						mode={VIEW_POLL}
						authedUser={authedUser}
					/>
				</li>
			))}
		</ul>
	</div>
)

function questionFilter(qid, authedUser, answered) {
	if(answered === true)
		return authedUser.answers[qid]
	return !authedUser.answers[qid]
}

export default QuestionList