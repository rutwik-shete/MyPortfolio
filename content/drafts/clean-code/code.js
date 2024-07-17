function getUsersByName(name) {}

function getPostsByTag(tags) {}

function getUserPosts(userID) {}

function greetUser(firstName, lastName, password, email) {
  return `Welcome, ${firstName} ${lastName}! \n 
  Your password is ${password.length > 8 ? "strong" : "weak"}`
}

function greetUser(userData) {
  fetch("/users", userData)

  return "Success!"
}
