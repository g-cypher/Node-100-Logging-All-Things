const express = require('express');
const fs = require('fs');
const app = express();

app.use((req, res, next) => {
// write your logging code here

let agent = req.header('User-Agent');
let agentNoComma = agent.replace(",", " ");
let time = new Date().toISOString();
let method = req.method;
let resource = req.path;
let version = "HTTP/" + req.httpVersion;
let status = res.statusCode;

let log = agentNoComma + "," + time + "," + method + "," + resource + "," + version + "," + status + '\n';

console.log(log);

fs.appendFile('log.csv', log, (err) => { 

    if (err) throw err;
    // if no error
    console.log(log);
    
});

next();

});

app.get('/', (req, res) => {
// write your code to respond "ok" here
    res.send('ok');
});

app.get("/logs", (req, res) => {
    // write your code to return a json object containing the log data here
        fs.readFile("log.csv", "utf8", (err, data) => {
            if (err) throw err;
            let jsonArr =[];
            var lines = data.split("\n");
            for (var i=1; i < lines.length - 1; i++){
                let info = lines[i].split(",");
                let obj = {
                    "Agent": info[0],
                    "Time": info[1],
                    "Method": info[2],
                    "Resource": info[3],
                    "Version": info[4],
                    "Status": info[5]
                };
                jsonArr.push(obj);
            };
            res.json(jsonArr);
            res.end();
        });
    });
    
    module.exports = app;