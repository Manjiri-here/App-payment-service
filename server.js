// We installed yarn using -> $ yarn add express -> Then deleted the node_modules -> And came to this file to write program. 
const express = require('express')

const app= express()

app.get('/', (request, response) => {
   app.send('welcome to payment service')
})

app.post ('/payment', (request, response) => {
    response.dind('payment successful')
})

app.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000')
})
