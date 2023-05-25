const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads")
    },
    filename: (req, file, callback) => {
        console.log(file)
        const filename = `image-${Date.now()}.${file.originalname}`
        callback(null, filename)
    }
})

const fileFilter = (req, file, callback) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        callback(null, true)
    } else {
        callback(null, false)
        return callback(new Error("Invalid file choose"))
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

module.exports = upload

