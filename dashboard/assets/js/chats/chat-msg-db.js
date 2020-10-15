/* TEAM INIFINITY - i2talk */

//gets the data stored in the local storage
ichats = JSON.parse(localStorage.getItem("ichats"));

//to check if local storage contains users data
if(ichats == null || ichats == undefined) { //if local storage is empty, assign data to local storage

ichats = [ 
    //array that contains dummy info about users
        {
            "chatID" : 5,
            "sender" : "Jan3",
            "receiver" : "Maureen3",
            "time" : "Anyanwu Maureen",
            "timestamp" : "A3Maureen@tiidelab.com",
            "message" : "Team Infinity",
            "scheduled" : "09048940949"
        },
        {
            "chatID" : 4,
            "sender" : "1.png",
            "receiver" : "Maureen3",
            "time" : "Anyanwu Maureen",
            "timestamp" : "A3Maureen@tiidelab.com",
            "message" : "Team Infinity",
            "scheduled" : "09048940949"
        },
        {
            "chatID" : 3,
            "sender" : "1.png",
            "receiver" : "Maureen3",
            "time" : "Anyanwu Maureen",
            "timestamp" : "A3Maureen@tiidelab.com",
            "message" : "Team Infinity",
            "scheduled" : "09048940949"
        },
        {						
            "chatID" : 2,
            "sender" : "1.png",
            "receiver" : "Maureen3",
            "time" : "Anyanwu Maureen",
            "timestamp" : "A3Maureen@tiidelab.com",
            "message" : "Team Infinity",
            "scheduled" : "09048940949"
        },
        {
            "chatID" : 1,
            "sender" : "1.png",
            "receiver" : "Maureen3",
            "time" : "Anyanwu Maureen",
            "timestamp" : "A3Maureen@tiidelab.com",
            "message" : "Team Infinity",
            "scheduled" : "09048940949"
        }
    ];
    //This gives room for the data to be accessible from any browser in any device (Apart from Internet Explorer)
    localStorage.setItem("ichats", JSON.stringify(ichats)); //Stores the data in the Local Storage
    ichats = JSON.parse(localStorage.getItem("ichats"));
}

//gets the data stored in the local storage
chatsIdTracker = JSON.parse(localStorage.getItem("chatsIdTracker"));

//to check if local storage contains users id tracker
if(chatsIdTracker == null || chatsIdTracker == undefined) { //if local storage is empty, assign data to local storage
    chatsIdTracker = 5;
    localStorage.setItem("chatsIdTracker", chatsIdTracker); //Stores the data in the Local Storage
    chatsIdTracker = localStorage.getItem("chatsIdTracker");
}

