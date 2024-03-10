// Connect DB and define schemas 

const mongoose = require("mongoose")

// Connect to MongoDB
mongoose.connect('url')

// Define schemas
const AdminSchema = new mongoose.Schema({

})

const UserSchema = new mongoose.Schema({

})

const CourseSchema = new mongoose.Schema({

})

// Defining models
const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Admin', CourseSchema);

//exporting models
model.exports = {
    Admin,
    User,
    Course
}
