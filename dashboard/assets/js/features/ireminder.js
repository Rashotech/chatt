const ireminderForm = document.getElementById("ireminderForm");
const ireminder_textspace = document.getElementById("ireminder-textspace");
const ireminderDesc = document.getElementById("ireminderDesc");
const ireminder_date = document.getElementById("ireminder");
    
    ireminderForm.addEventListener("submit", (e) => {
        e.preventDefault();

        console.log("ireminderForm has been submitted");

        const display = ireminderDesc.value + "----->"+ireminder_date.value;

        ireminder_textspace.innerHTML = display;


    });
