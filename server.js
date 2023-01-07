// Import Dependencies
const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 4000

// Import JSON files
const projects = require("./projects.json")
const about = require("./about.json")

// Create our app object
const app = express()

// Middleware
app.use(cors())

// Home Route
app.get("/", (req, res) => {
    res.send("Hello World")
})

// Route for retrieving projects
app.get("/projects", (req, res) => {
    res.json(projects)
})

// Route for retrieving about info
app.get("/about", (req, res) => {
    res.json(about)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})