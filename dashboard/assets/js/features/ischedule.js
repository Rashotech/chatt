scheduledMessage = JSON.parse(localStorage.getItem("iSchedule"))
    if(scheduledMessage == undefined || scheduledMessage == null){
    scheduledMessage = []
    }

   

function addScheduledMessage() 
{
    var d = new Date();
    d.setFullYear(prompt("enter delivery year"), prompt("enter delivery month "), prompt("enter delivery day"));
    d.setHours(prompt("Enter hour"),prompt("Enter minute"),prompt("Enter second"));
    var n = d
    message = 
        {
            "time" : n,
            "tittle" : prompt("Enter message tittle"),
            "message" : prompt("Type message")
        }
    scheduledMessage.push(message)
    localStorage.setItem("iSchedule", JSON.stringify(scheduledMessage))
    display() 
}

function Delete(i) {
    con = confirm("Are you sure you want to delete " + scheduledMessage[i].tittle )
    if (con == true) {
        scheduledMessage.splice(i, 1)
    localStorage.setItem("now", JSON.stringify(scheduledMessage))
    display()
}
}

function edit(i) {
    updatedMessage={
        "time" : prompt("Update time", scheduledMessage[i].time ),
        "tittle" : prompt("Update tittle", scheduledMessage[i].tittle ),
        "message" : prompt("Update message", scheduledMessage[i].message )
    }
    scheduledMessage[i] = updatedMessage
    localStorage.setItem("now", JSON.stringify(scheduledMessage))
    display()
}
function display(){

    disp = ''
    for(i=0; i<scheduledMessage.length; i++)
    {
        disp += ` <div class="smsg">
            
            
            <h2> ${scheduledMessage[i].tittle} </h2><br>
            <p> ${scheduledMessage[i].message} </p>
            <div id="msg-time"> ${scheduledMessage[i].time} </div>
             <button onclick="Delete(${i});">Delete Message</button>
             <button onclick="edit(${i});">Edit Message</button>
        </div> `
    }
     document.getElementById("new-msg").innerHTML = disp
    }

    display() 