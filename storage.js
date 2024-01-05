// In this we try to learn how to use local Storage, Session storage and Cookies


// Local storage
// Using this command we can set any value to local storage 
localStorage.setItem("userName","satyam") 

// But if we want to store object value then we have to modify this 
const user = {
    firstName:"satyam",
    lastName:"mittal"
}
localStorage.setItem("userName",JSON.stringify(user));

// TO get value from Local storage
const userDetails = localStorage.getItem("user")
console.log(userDetails)

// to remove particular key value 
localStorage.removeItem("user")

// to remove all the key value
localStorage.clear()


// Session storage
// Using this command we can set any value to session storage
sessionStorage.setItem("userName","satyam") 

// But if we want to store object value then we have to modify this 
const newUser = {
    firstName:"satyam",
    lastName:"mittal"
}
localStorage.setItem("userName",JSON.stringify(newUser));

// TO get value from Local storage
const userValue = localStorage.getItem("user")
console.log(userValue)

// to remove particular key value 
localStorage.removeItem("user")

// to remove all the key value
localStorage.clear()


// Cookies

// To see all the Cookies
console.log(document.cookie);

// To add new cookies
document.cookie = "name=satyam"

// In JavaScript, encodeURIComponent and decodeURIComponent are functions 
// used to encode and decode components of a Uniform Resource Identifier (URI), 
// ensuring that special characters are properly handled when they are included in a URL.
const value = "@satyam"
document.cookie = `key=${encodeURIComponent(value)}`

// To decode cookie
decodeURIComponent(document.cookie)

// Set a cookie with various attributes
const date = new Date();
date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000)); // Expires in 7 days

const cookieOptions = {
    expires: date.toUTCString(),
    domain: 'example.com',
    path: '/',
    secure: true,
    SameSite: 'Strict'
};

document.cookie = "myCookie=myValue; expires=" + cookieOptions.expires +
    "; domain=" + cookieOptions.domain +
    "; path=" + cookieOptions.path +
    "; secure=" + cookieOptions.secure +
    "; SameSite=" + cookieOptions.SameSite;

// Function to delete a cookie by setting its expiration date to the past
function deleteCookie(cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Example usage: Delete the cookie named "myCookie"
deleteCookie("myCookie");    
