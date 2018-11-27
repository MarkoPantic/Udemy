var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Marko'
    }
    setTimeout(() => {
        
        callback(user);

    }, 3000);
}

getUser(123, (user) => {
    console.log(user);
});


var apiKey = 'AIzaSyCas8_v9g452MDlBf4FG9rfKsoO9ARM-Dg';