import React, { Component } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

class Dashboard extends Component {
	state = {
		activeTab: '1'
	}

	toggle(tab) {
		console.log("*** clicked ", tab)
		if(this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			})
		}
	}

	render() {
		console.log("*** state ", this.state)
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
        		TAB1
        	</TabPane>
					<TabPane tabId='2'>
						TAB2
        	</TabPane>        	
        </TabContent>

      </div>			
		)
	}
}

export default Dashboard