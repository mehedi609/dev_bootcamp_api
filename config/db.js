const mongoose = require('mongoose')

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGOO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}

exports.connectDB = connectDB
