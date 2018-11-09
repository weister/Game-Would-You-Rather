import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestionAnswer } from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

function submitQuestionAnswer(authedUser, qid, answer) {
	return {
		type: SAVE_QUESTION_ANSWER,
		authedUser,
		qid,
		answer
	}
}

export function handleSubmitQuestionAnswer(answer, qid) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(() => dispatch(submitQuestionAnswer(authedUser, qid, answer)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => console.log(e))  
  }
}