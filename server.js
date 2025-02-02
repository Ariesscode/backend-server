//I want to build a server and build my own api
//I need a way to connect to the network and listen to request and respond with something


const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors()) //security for cross origin resource sharing 

const fruitsApi = {
    "apple": {
        "calories": 322,
        "protein": "10g",
        "sugar": "2g"
    },
    "durian": {
        "calories": 563,
        "protein": "22g",
        "sugar": "5g"
    },
    "banana": {
        "calories": 153,
        "protein": "4g",
        "sugar": "344g"
    }
}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request,response) => {
    response.json(fruitsApi)
})

app.get('/api/:fruitName', (request,response) => {
    let fruitName = request.params.fruitName.toLowerCase()
    if(fruitsApi[fruitName]){ //I use bracket notation because our object has spaces
        console.log(response.json(fruitsApi[fruitName])
    )
        response.json(fruitsApi[fruitName])

    }else{

        response.json(fruitsApi['apple'])
    }
    
})




app.listen(process.env.PORT || PORT, () => {
    console.log(`App is listening on ${PORT}!`)
});