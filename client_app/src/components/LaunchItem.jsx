import React from 'react';
import {Link} from 'react-router-dom'

export default function LaunchItem({
	launch: {
		flight_number,
		mission_name,
		launch_year,
		links
	}
}) {
	console.log(links.mission_patch_small)
	return(
		<div className="list-group-item">
			<div className="row">
				<div className="col-2">
					{
						(links.mission_patch_small != null ?
								<img style={{width:'100%'}} src={`${links.mission_patch_small}`} alt=""/>
							:
								<img style={{width:'100%'}} src={`${process.env.PUBLIC_URL}/spacex.png`} alt=""/>
						)
					}
				</div>
				<div className="col">
					<h4 className="title is-4">{mission_name}</h4>
					<p className="subtitle">{launch_year}</p>
					<hr/>
					<Link to={`/flight/${flight_number}`} className="btn btn-primary">
						About this mission
					</Link>
				</div>
			</div>
		</div>
	)
}