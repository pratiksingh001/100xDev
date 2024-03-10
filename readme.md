# mongoose

mongoose ----> Define your schema 

## Course Selling Website

### DEFINING SCHEMA ---> mongoose.schema({})

    USER SCHEMA
    const UserSchema = new mongoose.schema({
        username: String,
        password: String
    })

    COURSE SCHEMA
    const CourseSchema = new mongoose.schema({
        title: String
    })

### DEFINING MODEL ---> mongoose.model("<Name of the model>", Model Schema)

    USER MODEL
    const User = mongoose.model('User', UserSchema);

### CREATE SYNTAX

    User.create({
        username: req.body.username,
        password: req.body.password
    })

### READ SYNTAX

##### Find By An ID
    User.findById("1");

##### Find single instance using a key
    User.findOne({
        username: "pratik@gmail.com"
    })

##### Find all instance using that key
    User.find({
        username: "pratik@gmail.com"
    })

### UPADTE SYNTAX

##### Updating a single row
    User.updateOne({
        id: "1"
    }, {
        password: "newPassword"
    })

##### Updating every row
    User.updateOne({}, {
        premium: true
    })

### DELETE SYNTAX

##### Deleting everything from a table
    User.deleteMany({})

##### Delete user having the specific username
    User.deleteOne({
        username: "pratik@gmail.com"
    })


# What is CLUSTER, DATABASE and TABLE

### CLUSTER

##### Cluster is basically a group of Databases, in other words there are multiple databases can be stored inside a single Cluster.

### DATABASES

##### Database contains different tables.

### TABLES

##### Tables are where actually the data are stored in rows and columns