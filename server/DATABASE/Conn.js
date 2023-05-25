const mongoose = require('mongoose')
mongoose.set("strictQuery", false)

const DB = "mongodb+srv://CrudWithSearchFilterSort:CrudWithSearchFilterSort@cluster0.ehq4qis.mongodb.net/practice4?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Database Connected successfully')).catch((err) => console.log(err))