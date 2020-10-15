/* TEAM INIFINITY - i2talk */

// var users=[];
// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         users.push(doc.data());
//         console.log(doc.data());
//     });
// });

// alert(JSON.stringify(iuserss))
//to check if local storage contains users data
niusers = [ 
    //array that contains dummy info about users
        {
            "userID" : 1,
            "img" : "female.png",
            "userName" : "Maureen3",
            "fullName" : "Anyanwu Maureen",
            "mail" : "A3Maureen@tiidelab.com",
            "bio" : "Team Infinity",
            "phone" : "09048940949",
            "password" : "aW5maW5pdHk=",
            "location" : "Lagos",
            "sex" : "Female",
            "userType" : "user",
            "level" : "0",
            "ban" : "0" ,
            "latlong" : [6.443261653,3.391531071]
        },
        {
            "userID" : 2,
            "img" : "female.png",
            "userName" : "Jan3",
            "fullName" : "Jane Andeh",
            "mail" : "AndehJane@tiidelab.com",
            "phone" : "09099377477",
            "password" : "aW5maW5pdHk=",
            "location" : "Abuja",
            "sex" : "Female",
            "userType" : "user",
            "level" : "0",
            "ban" : "0" ,
            "latlong" : [9.083333149,7.533328002]
        },
        {
            "userID" : 3,
            "img" : "male.png",
            "userName" : "Ife2020",
            "fullName" : "Adepoju Ifeoluwa",
            "mail" : "Ife@tiidelab.com",
            "phone" : "09063627278",
            "password" : "aW5maW5pdHk=",
            "location" : "Abuja",
            "sex" : "Male",
            "userType" : "user",
            "level" : "0",
            "ban" : "0" ,
            "latlong" : [9.083333149,7.533328002]
        },
        {						
            "userID" : 4,
            "img" : "male.png",
            "userName" : "TJ4shot",
            "fullName" : "Oyetunji Atilade",
            "mail" : "OyetunjiAtilade@tiidelab.com",
            "phone" : "09097363723",
            "password" : "aW5maW5pdHk=",
            "location" : "Abuja",
            "sex" : "Male",
            "userType" : "admin",
            "level" : "1",
            "ban" : "0" ,
            "latlong" : [9.083333149,7.533328002]
        },
        {
            "userID" : 5,
            "img" : "male.png",
            "userName" : "Rasho",
            "fullName" : "Ayoade Rasheed",
            "mail" : "Rasho@tiidelab.com",
            "phone" : "09037463836",
            "password" : "aW5maW5pdHk=",
            "location" : "Ibadan",
            "sex" : "Male",
            "userType" : "admin",
            "level" : "2",
            "ban" : "0" ,
            "latlong" : [7.970016092,3.590002806]
        }
];

// for (i=0; i<niusers.length; i++) {
//     db.collection("users").add(niusers[i])
//       .then((ref) => {
//         console.log("Added User with ID:", ref.id)})
// }