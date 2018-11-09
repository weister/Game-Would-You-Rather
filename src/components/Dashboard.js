import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import QuestionList from './QuestionList'

class Dashboard extends Component {
	state = {
		activeTab: '1'
	}

	toggle(tab) {
		if(this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			})
		}
	}

	render() {
		const { users, questions, authedUser } = this.props
		return (
			<div>
        <Nav>
          <NavItem>
            <NavLink
            	className="unanswered-tab"
            	onClick={() => this.toggle('1')}
            >
            	Unanswered Questions:
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
            	className="answered-tab"
            	onClick={() => this.toggle('2')}
            >
            	Answered Questions:
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
        	<TabPane tabId='1'>
        		<QuestionList
        			authedUser={users[authedUser]}
        			questions={questions}
        			answered={false}
        		/>
        	</TabPane>
					<TabPane tabId='2'>
						<QuestionList
							authedUser={users[authedUser]}
							questions={questions}
							answered={true}
						/>
        	</TabPane>        	
        </TabContent>

      </div>			
		)
	}
}

function mapStateToProps({ users, questions, authedUser  }) {
	return {
		users,
		questions,
		authedUser
	}
}

export default connect(mapStateToProps)(Dashboard)