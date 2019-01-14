import React, {Component, Fragment} from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchItem from './LaunchItem'

const LAUNCHES_QUERY= gql`
	query LaunchesQuery {
		launches {
			flight_number
			mission_name
		}
	}
`;

export default class Launches extends Component {
	render(){
		return(
			<Fragment>
				<Query query={LAUNCHES_QUERY}>
					{
						({loading, error, data})=>{
							if (loading){
								return <h1>Loading</h1>
							} else if (error){
								console.log("ERROR QUERY")
							}
							return(
								<div>
									{
										data.launches.map(launch=><LaunchItem launch={launch}/>)
									}
									
								</div>
							)
						}
					}
				</Query>
			</Fragment>
		)
	}
}