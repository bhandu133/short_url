const express = require('express')
const { db } = require('./models/db')
const linksRoute = require('./routes/links')
const redirRoute = require('./routes/redirection')

const app = express()

const port = process.env.PORT || 4445;

app.use(express.json())

app.use('/api/links', linksRoute)
app.use('/', redirRoute)

db.sync({force: true}) // never force:true in prod, it drops dbs
    .then(() => console.log('db works'))
    .catch((err) => console.error(err))

app.listen(port, () => {
    console.log('Server started on http://localhost:4445')
})
