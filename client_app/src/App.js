import React, { Component, Fragment } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import Jumbotron from './components/Jumbotron';
import Stats from './components/Stats';
import Footer from './components/Footer';

const client = new ApolloClient({
	uri: '/graphql'
})

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<Fragment>
						<Jumbotron />
						<div className="container">
							<Stats/>
							<hr/>
							<Route exact path="/" component={Launches}/>
							<Route exact path="/flight/" component={RedirectComponent}/>
							<Route exact path="/flight/:flight_number" component={Launch}/>
							<hr/>
							<Footer/>
						</div>
					</Fragment>
				</Router>
			</ApolloProvider>
		);
	}
}

const RedirectComponent = () => {
	return <Redirect to="/"/>
}

export default App;
