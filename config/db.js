const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    const db_url = "mongodb+srv://arpita:April5th@cluster0.zdtiwoa.mongodb.net/books?retryWrites=true&w=majority"
    mongoose.set("strictQuery", true)
    // console.log(process.env.ATLAS_URL)
    await mongoose.connect(db_url, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas");
    })
  }
  catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB

