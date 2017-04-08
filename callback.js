var users = ["Sam", "Ellie", "Bernie"];

function addUser(username, callback) {
    setTimeout(function() {
        users.push(username);
        callback();
    }, 200);
}

function getUsers() {
    setTimeout(function() {
        console.log(users);
    }, 100);
}

// First add user to database then execute getUsers after user has been added.
addUser("Jake", getUsers);
