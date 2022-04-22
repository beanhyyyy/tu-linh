/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

function infoFile(req, res) {
    const { PythonShell } = require('python-shell');
    const options = {
        args: [req.query.dir]
    };

    PythonShell.run('server/abc.py', options, function (err, data) {
        return res.send({ err, data })
    });
}

app.get('/info-image', infoFile);


// Start your app.
app.listen(2707, () => {
    console.log('server: localhost:2707')
});
