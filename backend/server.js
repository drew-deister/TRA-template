const axios = require("axios");
const express = require("express")
const PORT = 3306;
const dbOperation = require('./dbFiles/dbOperation');

const app = express()

// Configure acceptable origins here, (we actually may not need this at all for React Native)
// https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/
// app.use(cors({
//     origin: 'https://www.section.io'
// }));

dbOperation.getNames().then(response => {
    console.log(response);
})

// MARK: Express Routing
app.get('/', (req, res, next) => {
    res.send('This is the root route.');
}); 

app.get('/hello', (req, res, next) => {
    res.send('Hello Express!');
}); 

app.listen(PORT);

// export default router;