const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        foo: 'bar'
    })
})

app.listen(3000, () => {
    console.log("API is running")
})