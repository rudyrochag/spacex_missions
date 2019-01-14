/*
*	Require dependencies
*/
const express = require("express")
const graphHTTP = require("express-graphql")
const schema = require("./schema")

// Do app an instance of express and set your port
const app = express()
app.set('PORT', process.env.PORT || 5000)

// app will use graphql, with its config (schema, graphiql(ui))
app.use('/graphql', graphHTTP({
	schema: schema,
	graphiql: true
}))

// Server listen
app.listen(app.get('PORT'), ()=>{
	console.log(`Magic happens on localhost:${app.get('PORT')}`)
})