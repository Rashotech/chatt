
/* TEAM INIFINITY - i2talk */
// chatbox = document.getElementsByClassName("chat-box")[0]
// var chatARea = document.getElementById("main-container")
// var content = `
//     <div class="chat">
//     <div class="chat-header">Private Chat</div>
//     <div class="chat-window">
//     <ul id ="messages">
//         <li class="msg left">
//             <span id="chat-new">
//                 <i class="name">Ade: </i>Hello there!
//             </span>
//         </li>
//         <li class="msg left">
//             <span>
//                 <i class="name">Bayo: </i>How are you?
//             </span>
//         </li>
//         <li class="msg my">
//             <span>
//                 <i class="name">Rasheed: </i>Fine thanks
//             </span>
//         </li>
//     </ul>
//     <form id="messageForm">
//         <input type="text" id="msg-input">
//         <button id="msg-btn">Send</button>
//     </form>
//     </div>
// </div>
//     `
// chatbox.addEventListener("click", function() {
//         chatARea.innerHTML = content;
// } )
var messageScreen = document.getElementById("messages");
var messageForm = document.getElementById("messageForm");
const msgInput = document.getElementById("msg-input");
const msgBtn = document.getElementById("msg-btn");
const msgRef = db.collection("messages");

function displayChat() {
    
}

setTimeout(function(){ document.getElementById("messages").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}, 1000);


messageForm.addEventListener("submit", event => {
    // if (!text.trim()) return;
    var id = uuidv4()
    var text = msgInput.value;
    const msg = {
        id: id,
        name : loggedUser,
        text : text,
        timestamp : firebase.firestore.FieldValue.serverTimestamp()
    }
    document.getElementById("messageForm").reset();
    msgRef.add(msg).then((ref) => {
        console.log("Added message with ID:", ref.id)
})
event.preventDefault();
});

msgRef.onSnapshot(snapshot => {
    shown = snapshot.docChanges()[0].doc.data()
    if (shown) {
        if (!shown.createdAt && snapshot.metadata.hasPendingWrites) {
            // we don't have a value for createdAt yet
            const ts = firebase.firestore.Timestamp.now()
            console.log(`timestamp: ${ts} (estimated)`)
        }
        else {
            // now we have the final timestamp value
            const { id , name, text} = shown;
    const msg = `
    <li class="${name === loggedUser ? "my" : "msg"}">
    <span id="chat-new">
        <i class="name">${name}: </i> ${text}
    </span>
</li>
    `
    messageScreen.innerHTML += msg;
    setTimeout(function(){ document.getElementById("messages").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}, 50);
            console.log(`timestamp: ${shown.createdAt} (actual)`)
        }
    }
    // messages.forEach(function(doc) {
    
    // })
});


function showChat() {
    msgRef.orderBy("timestamp", "asc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const { id , name, text} = doc.data();
    const msg = `
    <li class="${name === loggedUser ? "my" : "msg"}">
    <span id="chat-new">
        <i class="name">${name}: </i> ${text}
    </span>
</li>
    `
    messageScreen.innerHTML += msg;
        });
    });
}
showChat();
