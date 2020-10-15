//CHECKS IF A USER IS LOGGED IN. IF NOT REDIRECT BACK TO LOGIN
if(isLoggedIn() == false) {
    window.location.assign("../login.html");
}
else {
    loggedUser = isLoggedIn();
}
//GET USER RECORD
loggedUserRecord = getUserByUsername(loggedUser);
userType = loggedUserRecord.userType;

//CONFIRM IF THE USER IS AN ADMIN
if(userType != "admin") {
    window.location.assign("../index.html");
} else { 
    isAdmin = true; 


//////////////////////////////////////////
adminHead = `<div id="admin-head-img"><img src="../../users/${loggedUserRecord.img}" alt=""></div>
<h3>Welcome back, <span>${loggedUserRecord.fullName}</span>!</h3> <a href="../index.html"><i class="fas fa-reply-all fa-1x"></i> Back to Chats</a>`;
document.getElementById("admin-head").innerHTML = adminHead;

////////////////////////////////////////////
users = getUsers();
originalUsers = getUsers();
adminBoxBody = `<i class="fas fa-user-plus dash-icon"></i>
<h2>${users.length}</h2>
<p>User Sign-ups</p>`;
document.getElementById("admin-dashboard-box-body").innerHTML = adminBoxBody;

///////////////////////////////////////////////
function searchUser() {
    //search for all results using filter & includes (Part match but case insensitive)
    param = (document.getElementById("user-search").value).toLowerCase();
        users = originalUsers.filter(x=>x.userName.toLowerCase().includes(param));
        if(users == undefined || users == null || users == "") {
            alert(`No record found for ${param}.`);
        } else {
            //document.getElementById("recordBar").style.display = "block";
            //setRecord(fellows.length);
            displayInfo(users);
        }
    }

function displayInfo(users) { //Displays the Info
        showUsers = "";
        if(users.length > 4) {
            arrLength = 4;
        } else {
            arrLength = users.length;
        }
        for(j=0; j < arrLength; j++) {		
            showUsers +=`
            <div class="admin-user-search"><a href="">${users[j].userName}</a>
            <a onclick="searchDropDown(${(j + 1)})"><i class="fas fa-ellipsis-v"></i></a>
            <div class="admin-user-function" id="admin-user-setting${(j + 1)}">
            <p>Edit user details</p>
            <p>Suspend user account</p>
            <p>Flag user messages</p>
            <p>Delete user account</p> </div>
            </div>`; 
                }
            showUsers += `<div class="admin-users-viewmore">View more users...</div>`;
            document.getElementById("user-results").innerHTML = showUsers;    
    }
    function searchDropDown(use) {
        x = document.getElementById(`admin-user-setting${use}`);
        if(x.style.display === "none"){
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

}




