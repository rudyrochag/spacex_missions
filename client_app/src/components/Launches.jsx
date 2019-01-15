import React, {Component, Fragment} from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchItem from './LaunchItem'

const LAUNCHES_QUERY= gql`
	query LaunchesQuery {
		launches {
			flight_number
			mission_name
			launch_success
			launch_year
			links{
				mission_patch_small
			}
		}
	}
`;

export default class Launches extends Component {
	render(){
		return(
			<Fragment>
				<div className="list-group">
					<Query query={LAUNCHES_QUERY}>
						{
							({loading, error, data})=>{
								if (loading){
									return <h1>Loading</h1>
								} else if (error){
									console.log("ERROR QUERY")
								}
								return(
									<Fragment>
										{
											data.launches.reverse().map(launch=><LaunchItem key={launch.flight_number} launch={launch}/>)
										}
									</Fragment>
								)
							}
						}
					</Query>
				</div>

			</Fragment>
		)
	}
}