const express = require('express');
const cors = require('cors');
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('/home/joekr/etc/certificates/leusmann.io.key', 'utf8');
var certificate = fs.readFileSync('/home/joekr/etc/certificates/leusmann.io.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };
const app = express();
app.use(cors());
app.use(express.json());


const PORT = '46980' || process.env.PORT;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://leusmann.io"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/uploads', function (request, response) {
    const jsonData = request.body
    try {
        const filename = "./uploads/" + jsonData.topic.text + Date.now() + ".json"
        console.log(filename)
        fs.writeFile(filename, JSON.stringify(jsonData), function (err) {
            if (err) {
                console.log(err);
            }
        });
    }
    catch (err) {
        console.log(err)
    }

    response.send(jsonData)
});
var jsons = []
var files = fs.readdirSync('./uploads/')

for (let index = 0; index < files.length; index++) {
    const file = files[index];
    try {
        const tmp2 = JSON.parsefs.readFileSync('./uploads/' + file, 'utf-8'))
        // console.log(tmp, tmp2)
        jsons.push(tmp2)
    } catch (err) {
        console.log(err)
    }

}
app.get('/topics', function (req, res) {
    res.send(jsons);
});

app.use((err, req, res, next) => {
    if (err.code === "INCORRECT_FILETYPE") {
        res.status(422).json(({ error: "Only json files are allowed" }));
        return;
    }
    if (err.code === "LIMIT_FILE_SIZE") {
        res.status(422).json(({ error: "Allowed file size is 500KB" }));
        return;
    }
});

// app.listen(PORT, '0.0.0.0', () => console.log(`Server listening on port ${PORT}`));

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
