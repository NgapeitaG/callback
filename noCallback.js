var users = ["Sam", "Ellie", "Bernie"];

function addUser(username) {
    setTimeout(function() {
        users.push(username);
    }, 200);
}

function getUsers() {
    setTimeout(function() {
        console.log(users);
    }, 100);
}

// First add user to database.
addUser("Jake");
// Second get updated list of users.
getUsers();
