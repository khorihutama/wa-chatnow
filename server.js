const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 8080

const app = express()
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', function(req, res){
    res.sendFile('/');
})

app.post('/chat-now', function (req, res) {
    try {
        const phone = req.body.full_phone.substr(1)
        res.redirect('https://api.whatsapp.com/send/?phone=' + phone)
    } catch (error) {
        console.log(error.message)
    }
    
    
})

app.post('/action', function (req, res) {
    console.log()

    // res.redirect('https://api.whatsapp.com/send/?phone=62' + req.body.wow)
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})