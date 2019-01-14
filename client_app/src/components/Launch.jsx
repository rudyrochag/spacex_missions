import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const LAUNCH_QUERY = gql`
	query LaunchQuery($flight_number: Int!){
		launch(flight_number: $flight_number){
			flight_number
			mission_name
			links {
				video_link
				mission_patch_small
			}
		}
	}
`;

export default class Launch extends Component {
	render(){
		let { flight_number } = this.props.match.params
		flight_number = parseInt(flight_number)
		return(
			<Fragment>
				<Query query={LAUNCH_QUERY} variables={{flight_number}}>
					{
						({loading, error, data})=>{
							return(
								<div>
									<h3>TEST</h3>
									<hr/>
									<Link to="/">Back</Link>
								</div>
							)
						}
					}
				</Query>
			</Fragment>
		)
	}
}