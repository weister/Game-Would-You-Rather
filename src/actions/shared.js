import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { getInitialData } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
	return (dispatch) => {
		dispatch(showLoading())
		return getInitialData()
			.then(({ users, questions }) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
				dispatch(setAuthedUser(Object.keys(users)[0]))
				dispatch(hideLoading())
			})
	}
}