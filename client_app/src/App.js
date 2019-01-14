import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
	uri: '/graphql'
})

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<div>
						<Route exact path="/" component={Launches}/>
						<Route exact path="/flight/" component={RedirectComponent}/>
						<Route exact path="/flight/:flight_number" component={Launch}/>
					</div>
				</Router>
			</ApolloProvider>
		);
	}
}

const RedirectComponent = () => {
	return <Redirect to="/"/>
}

export default App;
