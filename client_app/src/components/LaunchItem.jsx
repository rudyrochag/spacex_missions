import React from 'react';
import {Link} from 'react-router-dom'

export default function LaunchItem({
	launch: {
		flight_number,
		mission_name
	}
}) {
	return(
		<div>

			{mission_name}
			<Link to={`/flight/${flight_number}`}>
				Ver Detalles
			</Link>
		</div>
	)
}