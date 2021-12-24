const express = require("express")
const morgan = require('morgan')

const app = express()

app.use(morgan("dev"))
app.use(express.json())

// Add your code here.
const indexRoute = express.Router();

const controllerOne = function(request, response, next) {
    console.log("is this thing on?");
    next();
}

const controllerTwo = function(request, response, next) {


    return response.json({status: 200, data: null, message: "this thing on..."});
}

indexRoute.route("/apis").get(controllerOne, controllerTwo);

app.use(indexRoute);


app.listen(4200, () => {console.log("Express has Started")})