/* TEAM INIFINITY - i2talk */
var iUsers =[];
db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    iUsers.push(doc.data());
    // console.log(doc.data());
  });
  localStorage.setItem("iUsers", JSON.stringify(iUsers));
  localStorage.setItem("usersIdTracker", iUsers.length - 1);
});


//GET ALL USERS DATA FROM THE LOCAL STORAGE
function getUsers() {
    let inUsers = iUsers;
    return inUsers;
}


function getUserIdTracker() {
  users = getUsers();
  let usersIdTracker = localStorage.getItem("usersIdTracker");
  return usersIdTracker;
}

//GET USER DETAILS BY THEIR USERNAME
function getUserByUsername(uname) {
    users = getUsers();
    userIndex = users.findIndex(x=>x.userName.toLowerCase() == uname.toLowerCase());
    usersRecord = users[userIndex];
    return usersRecord;

}

//GET USER DETAILS BY THEIR MAIL
function getUserByMail(mail) {
  users = getUsers();
  userIndex = users.findIndex(x=>x.mail.toLowerCase() == mail.toLowerCase());
  usersRecord = users[userIndex];
  return usersRecord;
  
}

//GET USER DETAILS BY THEIR ID
function getUserByID(userID) {
    users = getUsers();
    userIndex = users.findIndex(x=>x.userID == userID);
    usersRecord = users[userIndex];
    return usersRecord;
}

//GET CURRENT USER INDEX IN LOCAL STORAGE
function getUserIndex(username) {
  users = getUsers();
  userIndex = users.findIndex(x=>x.userName == username);
  return userIndex;
}

function getUserDetails() {

}

//ENCODES THE PASSWORD
function hashPassword(password) {
    password = btoa(password);
    return password;
}

//VALIDATE LOGIN
function validateLogin(userName, upassword) {
    userName = getUserByUsername(userName);
    upassword = hashPassword(upassword);
    if (userName != null || userName != undefined) {
        if(userName.password == upassword) {
            return true;
        } else {
            return false;
        }
    }
    else {
        return false;
    }
}

//USER LOGIN
function userLogin(event) {
    userName = document.getElementById("_username").value;
    upassword = document.getElementById("_password").value;
    rememberMe = document.getElementById("rememberMe").value;
    validateUser = validateLogin(userName, upassword);
    if(validateUser == true) {
        /*  if(rememberMe == true) {
          setCookie(userName, false);
         } else {
          setCookie(userName, true);
         } */  
        loggedUserIn(userName);
        window.location.assign("dashboard/index.html");
    }
    else {
        document.getElementById("error-login").style.display = "Block";
        document.getElementById("error-login").innerHTML = "Invalid Username/Password!!";
        
    }
    event.preventDefault();
}

//ADD NEW USER TO THE DATABASE (LOCAL STORAGE)
function addUser(event) {
  users = getUsers();
  usersIdTracker = parseInt(getUserIdTracker()) + 1;
  validateUserSignup = validateSignup();
  
  if(validateUserSignup == true) { 
        password = hashPassword(document.getElementById("password").value);
        username = document.getElementById("userName").value
        newUser = {	
              "userID" : usersIdTracker,
              "img" : "",
              "userName" : username,
              "fullName" : document.getElementById("fullName").value,
              "mail" : document.getElementById("mail").value,
              "phone" : "",
              "password" : password,
              "location" : "",
              "sex" : "",
              "userType" : "user",
              "level" : "0",
              "ban" : "0" ,
              "latlong" : []
        }
        localStorage.setItem("tempUsers", JSON.stringify(newUser));
        loggedUserIn(username);
        localStorage.setItem("usersIdTracker", usersIdTracker);
        window.location.assign("./welcome.html");
    } else {
      document.getElementById("error-signup").style.display = "Block";
      document.getElementById("error-signup").innerHTML = validateUserSignup;
      window.location.assign("#formSignUp");
    }
    event.preventDefault();
}

//COMPLETE USER REGISTRATION AND UPDATE THE DATABASE (LOCAL STORAGE)
function addUserComplete(event) {
users = getUsers();
loggedIn = isLoggedIn();

if (loggedIn == false) {
  window.location.assign("login.html");
} else {
    userIndex = getUserIndex(loggedIn);
    sex = document.getElementById("sex").value;
    phone = document.getElementById("phone").value;
    userLocation = document.getElementById("userLocation").value;
    switch (userLocation) {
      case "Abia":
        latlong = [5.532003041,7.486002487];
        break;
      case "Adamawa":
        latlong = [10.2703408,13.2700321];
        break;
      case "Akwa Ibom":
        latlong = [5.007996056,7.849998524];
        break;
      case "Anambra":
        latlong = [6.210433572,7.06999711];
        break;
      case "Bauchi":
        latlong = [11.68040977,10.19001339];
        break;
      case "Bayelsa":
        latlong = [4.664030,6.036987];
        break;
      case "Benue":
        latlong = [7.190399596,8.129984089];
        break;
      case "Borno":
        latlong = [10.62042279,12.18999467];
        break;
      case "Cross River":
        latlong = [4.960406513,8.330023558];
        break;
      case "Delta":
        latlong = [5.890427265,5.680004434];
        break;
      case "Edo":
        latlong = [6.340477314,5.620008096];
        break;
      case "Ekiti":
        latlong = [7.630372741,5.219980834];
        break;
      case "Enugu":
        latlong = [6.867034321,7.383362995];
        break;
      case "Abuja":
        latlong = [9.083333149,7.533328002];
        break;
      case "Gombe":
        latlong = [10.29044293,11.16995357];
        break;
      case "Imo":
        latlong = [5.492997053,7.026003588];
        break;
      case "Jigawa":
        latlong = [11.7991891,9.350334607];
        break;
      case "Kaduna":
        latlong = [11.0799813,7.710009724];
        break;
      case "Kano":
        latlong = [11.99997683,8.5200378];
        break;
      case "Katsina":
        latlong = [11.5203937,7.320007689];
        break;
      case "Kebbi":
        latlong = [12.45041445,4.199939737];
        break;
      case "Kogi":
        latlong = [7.800388203,6.739939737];
        break;
      case "Kwara":
        latlong = [8.490010192,4.549995889];
        break;
      case "Lagos":
        latlong = [6.443261653,3.391531071];
        break;
      case "Nasarawa":
        latlong = [8.490423603,8.5200378];
        break;
      case "Niger":
        latlong = [10.4003587,5.469939737];
        break;
      case "Ogun":
        latlong = [7.160427265,3.350017455];
        break;
      case "Ondo":
        latlong = [7.250395934,5.199982054];
        break;
      case "Osun":
        latlong = [7.629959329,4.179992634];
        break;
      case "Oyo":
        latlong = [7.970016092,3.590002806];
        break;
      case "Plateau":
        latlong = [9.929973978,8.890041055];
        break;
      case "Rivers":
        latlong = [4.810002257,7.010000772];
        break;
      case "Sokoto":
        latlong = [13.06001548,5.240031289];
        break;
      case "Taraba":
        latlong = [7.870409769,9.780012572];
        break;
      case "Yobe":
        latlong = [11.74899608,11.96600457];
        break;
      case "Zamfara":
        latlong = [12.1704057,6.659996296];
        break;
      default:
        latlong = [];
    } 

    if(sex == "male") {
         img = "male.png";
    } else if(sex == "female") {
         img = "female.png";
    } else {
       img = "default.png";
    }
    tempUsers = JSON.parse(localStorage.getItem("tempUsers"))
    tempUsers.img = img;
    tempUsers.phone = phone;
    tempUsers.location = userLocation;
    tempUsers.sex = sex;
    tempUsers.latlong=latlong;
    // alert(JSON.stringify(tempUsers))
    db.collection("users").add(tempUsers).then((ref) => {
      // console.log("Added User with ID:", ref.id)
    })
  }
 
  setTimeout(function(){ window.location.assign("dashboard/index.html") }, 1500);
  localStorage.removeItem("tempUsers");
  event.preventDefault();
}

//VALIDATE SIGNUP
function validateSignup() {
    userName = document.getElementById("userName").value
    password = document.getElementById("password").value
    cpassword = document.getElementById("c-password").value
    mail = document.getElementById("mail").value

    if(getUserByUsername(userName) != undefined || getUserByUsername(userName) != null) {
      error = "Username Already Exists";
      return error;
    } 
    else if(getUserByMail(mail) != undefined || getUserByMail(mail) != null) {
      error = "Mail Already Exists";
      return error;
    } 
    else if (password != cpassword) {
      error = "Passwords don't match";
      return error;
    } 
    else if (password.length < 6) {
      error = "Password is less than 6 Letters";
      return error;
    } 
    else {
      return true;
    }
}

//CHECK IF ANY USER IS LOGGED IN
function loggedUserIn(username) {
  user = username;
  localStorage.setItem("loggedUserIn", username);
}

//GET THE USER LOGGED IN
function isLoggedIn() {
  user = localStorage.getItem("loggedUserIn");
  if (user == null || user == undefined) {
    return false;
  } else {
    return user;
  }
}

//CHECK IF USER IS LOGGED IN
function isUserLoggedIn(username) {
  user = localStorage.getItem("loggedUserIn");
  if (user != username || user == null || user == undefined) {
    return false;
  } else {
    return true;
  }
}



//



//TIME FUNCTIONS
/* var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
alert(dateTime)
timestamp = today.getTime();
alert(timestamp);

function toTimestamp(year,month,day,hour,minute,second){
    var datum = new Date(Date.UTC(year,month-1,day,hour,minute,second));
    return datum.getTime();
   }
toTimestamp("2020","10","1","22","14","30")
alert(toTimestamp("2020","10","1","22","14","30")) 

function toTimestamp(strDate){
 var datum = Date.parse(strDate);
 return datum/1000;
}

alert(toTimestamp('02/13/2009 23:31:30'));

alert(toTimestamp('2009 02 13 23:31:30'));

var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("demo").innerHTML = months[d.getMonth()];
*/

//COOKIES
/* function setCookie(userName, isExp) {
    var d = new Date();
    if(isExp == true) {
      document.cookie = "username=" + userName;
    } else {
      d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = "username=" + userName + ";" + expires + ";path=/";
    }  
  }



//GET COOKIE
function readCookie() {
  var allcookies = document.cookie;
  // Get all the cookies pairs in an array
  cookiearray = allcookies.split(';');
  // Now take key value pair out of this array
  for(var i=0; i<cookiearray.length; i++) {
     uname = cookiearray[i].split('=')[0];
     value = cookiearray[i].split('=')[1];
  }
  return value;
}
  
function checkCookie(username) {
    var user = readCookie();
    if (user == username) {
      return true;
    } else {
      return false;
      }
  }
//DELETE COOKIE
  function deleteCookie(username) {
    var now = new Date();
    now.setMonth( now.getMonth() - 1 );
    cookievalue = username + ";"
    
    document.cookie = "username=" + cookievalue;
    document.cookie = "expires=" + now.toUTCString() + ";"
 } */

function editUser() {

}

function searchUsers () {

}

function displayUsers() {

}