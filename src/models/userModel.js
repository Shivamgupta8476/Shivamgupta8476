const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookname: String,
    authorname: String,
    category:String,
    year:Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', bookSchema) //users



// String, Number
// Boolean, Object/json, array