import React from 'react'

const logoStyle={
	width:'50%'
}

const jumbotronStyle={
	borderRadius: '0',
	paddingTop: '10em',
	backgroundImage: `url(${process.env.PUBLIC_URL}/spacex-hq.jpg)`,
	backgroundColor:'#0033ff',
	backgroundPosition: 'center 90%',
	backgroundBlendMode:'multiply',
	backgroundSize:'cover',
	paddingBottom: '.5em'
}
export default function(){
	return(
		<div className="jumbotron" style={jumbotronStyle}>
			<div className="container">
				<img style={logoStyle} src={process.env.PUBLIC_URL + '/spacex-logo.png'} alt="SpaceX"/>
				<hr/>
				<p className="lead" style={{color:'white'}}>A little app for get information about SpaceX's Missions</p>
			</div>
		</div>
	)
}