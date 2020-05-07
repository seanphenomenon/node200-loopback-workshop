 // configured to apply  host and port dynamically only when app environment is in production

 module.exports= {
  "restApiRoot": "/api",
    "host": process.env.HOST,
      "port": process.env.PORT
}
