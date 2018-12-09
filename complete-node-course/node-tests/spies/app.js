var db = require('./db')


var handleSingup = (email, password) => {
    // Check if email exists
    // Save the user to the db
    db.saveUser({email, password})
    // Send welcome email
}


module.exports = {
    handleSingup
}