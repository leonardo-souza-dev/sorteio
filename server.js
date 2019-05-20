var app = require('./config/express.js');

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('server on | port: ' + app.get('port'));
});
