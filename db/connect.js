const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex:true,
    serverSelectionTimeoutMS:40000
  })
}

module.exports = connectDB
