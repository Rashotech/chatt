
/* TEAM INIFINITY - i2talk */
chatbox = document.getElementsByClassName("chat-box")[0]
var chatARea = document.getElementById("main-container")
var chatId = JSON.parse(localStorage.getItem("chatId"))
// chatbox.addEventListener("click", function() {
//         chatARea.innerHTML = content;
// } )
var messageScreen = document.getElementById("messages");
var messageForm = document.getElementById("messageForm");
const msgInput = document.getElementById("msg-input");
const msgBtn = document.getElementById("msg-btn");
const msgRef = db.collection("messages");
var leaveRoom = document.getElementById("leaveRoomidd");

function displayChat() {
    
}




messageForm.addEventListener("submit", event => {
    // if (!text.trim()) return;
    event.preventDefault();
    var text = msgInput.value;
    const msg = {
        sender : loggedUser,
        chat_room_id: chatId,
        text : text,
        timestamp : firebase.firestore.FieldValue.serverTimestamp()
    }
    document.getElementById("messageForm").reset();
    msgRef.add(msg).then((ref) => {
        console.log("Added message with ID:", ref.id)
})

});


var unsubscribe = msgRef.where("chat_room_id", "==", chatId).onSnapshot(snapshot => {
        if (snapshot.docChanges()[0] === undefined) {
            const msg = `
                <li id="no-msg">
                <span id="chat-new">
                    No Previous Messages..Send one now!
                </span>
                </li>
    `
    messageScreen.innerHTML += msg;
    setTimeout(function(){ 
    var elem = document.querySelector('#no-msg');
    elem.parentNode.removeChild(elem);
    }, 3000);

        } else {
        shown = snapshot.docChanges()[0].doc.data()
        // console.log(shown)
        const {sender, text} = shown;
        if (shown) {
            if (!shown.createdAt && snapshot.metadata.hasPendingWrites) {
                // we don't have a value for createdAt yet
                // const ts = firebase.firestore.Timestamp.now()
                // console.log(`timestamp: ${ts} (estimated)`)
            }
            else {
                // now we have the final timestamp value
                if (sender === loggedUser) {
                    var msg = `
                <li class="${sender === loggedUser ? "my" : "msg"}">
                <span id="chat-new">
                    ${text}
                </span>
            </li>
                `
                } else {
                    var msg = `
                <li class="${sender === loggedUser ? "my" : "msg"}">
                <span id="chat-new">
                    <i class="name">${sender}: </i> ${text}
                </span>
            </li>
                `
                }
        messageScreen.innerHTML += msg;
    document.getElementById("messages").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
                // console.log(`timestamp: ${shown.createdAt} (actual)`)
            }}
        }
        leaveRoom.addEventListener("click", function() {
            unsubscribe();
            localStorage.removeItem("chatId");
            window.location.assign("https://newchatt.netlify.app/dashboard/chatroom.html")
        })
    });

function showChat() {
    msgRef.where("chat_room_id", "==", chatId).orderBy("timestamp", "asc").get().then((querySnapshot) => {                                                                                                                                                                                                                                                                                                                                              
        querySnapshot.forEach((doc) => {
            const {sender, text} = doc.data();
    if (sender === loggedUser) {
        var msg = `
    <li class="${sender === loggedUser ? "my" : "msg"}">
    <span id="chat-new">
        ${text}
    </span>
</li>
    `
    } else {
        var msg = `
    <li class="${sender === loggedUser ? "my" : "msg"}">
    <span id="chat-new">
        <i class="name">${sender}: </i> ${text}
    </span>
</li>
    `
    }
    messageScreen.innerHTML += msg;
        });
    });
    setTimeout(function(){ document.getElementById("messages").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}, 1000);
}
showChat();

// Chat room

function enterChatroom(chatroomName) {
    name = chatroomName.getAttribute("data-chatroom-name");
    chatId = chatroomName.getAttribute("data-chatroom-id");
    localStorage.setItem("chatId", JSON.stringify(chatId));
    window.location.assign(`chatroom/${name}.html`)
}
